FROM rust:1.47-buster as planner
WORKDIR /app
RUN cargo install cargo-chef
COPY . .
RUN cargo chef prepare  --recipe-path recipe.json

FROM rust:1.47-buster as cacher
WORKDIR /app
RUN cargo install cargo-chef
RUN apt-get -q update && \
    apt-get -q install -y --no-install-recommends default-libmysqlclient-dev cmake golang-go python3-dev python3-pip && \
    pip3 install tokenlib && \
    rm -rf /var/lib/apt/lists/*
COPY --from=planner /app/recipe.json recipe.json
RUN cargo chef cook --release --recipe-path recipe.json

FROM rust:1.47-buster as builder
WORKDIR /app
ADD . /app
COPY --from=cacher /app/target target
COPY --from=cacher /usr/local/cargo /usr/local/cargo
ENV PATH=$PATH:/root/.cargo/bin
RUN apt-get -q update && \
    apt-get -q install -y --no-install-recommends default-libmysqlclient-dev cmake golang-go python3-dev python3-pip && \
    pip3 install tokenlib && \
    rm -rf /var/lib/apt/lists/*

RUN cd /app && \
    mkdir -m 755 bin

RUN \
    cargo --version && \
    rustc --version && \
    cargo install --path . --locked --root /app && \
    cargo install --path . --bin purge_ttl --locked --root /app

FROM debian:buster-slim
WORKDIR /app
RUN \
    groupadd --gid 10001 app && \
    useradd --uid 10001 --gid 10001 --home /app --create-home app && \
    apt-get -q update && \
    apt-get -q install -y build-essential default-libmysqlclient-dev libssl-dev ca-certificates libcurl4 python3-dev python3-pip && \
    pip3 install tokenlib && \
    rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/bin /app/bin
COPY --from=builder /app/version.json /app
COPY --from=builder /app/spanner_config.ini /app
COPY --from=builder /app/tools/spanner /app/tools/spanner

USER app:app

ENTRYPOINT ["/app/bin/syncstorage", "--config=spanner_config.ini"]
