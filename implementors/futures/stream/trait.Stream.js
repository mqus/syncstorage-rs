(function() {var implementors = {};
implementors["actix"] = [{text:"impl&lt;A:&nbsp;<a class=\"trait\" href=\"actix/prelude/trait.Actor.html\" title=\"trait actix::prelude::Actor\">Actor</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix/dev/channel/struct.AddressReceiver.html\" title=\"struct actix::dev::channel::AddressReceiver\">AddressReceiver</a>&lt;A&gt;",synthetic:false,types:["actix::address::channel::AddressReceiver"]},];
implementors["actix_net"] = [{text:"impl&lt;T, U&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_net/codec/struct.Framed.html\" title=\"struct actix_net::codec::Framed\">Framed</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"tokio_io/codec/decoder/trait.Decoder.html\" title=\"trait tokio_io::codec::decoder::Decoder\">Decoder</a>,&nbsp;</span>",synthetic:false,types:["actix_net::codec::framed::Framed"]},{text:"impl&lt;T, D&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_net/codec/struct.FramedRead.html\" title=\"struct actix_net::codec::FramedRead\">FramedRead</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"tokio_io/codec/decoder/trait.Decoder.html\" title=\"trait tokio_io::codec::decoder::Decoder\">Decoder</a>,&nbsp;</span>",synthetic:false,types:["actix_net::codec::framed_read::FramedRead"]},{text:"impl&lt;T, D&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_net/codec/struct.FramedWrite.html\" title=\"struct actix_net::codec::FramedWrite\">FramedWrite</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>,&nbsp;</span>",synthetic:false,types:["actix_net::codec::framed_write::FramedWrite"]},];
implementors["actix_web"] = [{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"actix_web/trait.HttpMessage.html\" title=\"trait actix_web::HttpMessage\">HttpMessage</a> + 'static&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_web/dev/struct.Readlines.html\" title=\"struct actix_web::dev::Readlines\">Readlines</a>&lt;T&gt;",synthetic:false,types:["actix_web::httpmessage::Readlines"]},{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_web/dev/struct.Payload.html\" title=\"struct actix_web::dev::Payload\">Payload</a>",synthetic:false,types:["actix_web::payload::Payload"]},{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;Pipeline&gt;",synthetic:false,types:["alloc::boxed::Box"]},{text:"impl&lt;S&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_web/multipart/struct.Multipart.html\" title=\"struct actix_web::multipart::Multipart\">Multipart</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Item = <a class=\"struct\" href=\"bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>, Error = <a class=\"enum\" href=\"actix_web/error/enum.PayloadError.html\" title=\"enum actix_web::error::PayloadError\">PayloadError</a>&gt;,&nbsp;</span>",synthetic:false,types:["actix_web::multipart::Multipart"]},{text:"impl&lt;S&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_web/multipart/struct.Field.html\" title=\"struct actix_web::multipart::Field\">Field</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Item = <a class=\"struct\" href=\"bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>, Error = <a class=\"enum\" href=\"actix_web/error/enum.PayloadError.html\" title=\"enum actix_web::error::PayloadError\">PayloadError</a>&gt;,&nbsp;</span>",synthetic:false,types:["actix_web::multipart::Field"]},{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_web/ws/struct.ClientReader.html\" title=\"struct actix_web::ws::ClientReader\">ClientReader</a>",synthetic:false,types:["actix_web::ws::client::ClientReader"]},{text:"impl&lt;S&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_web/ws/struct.WsStream.html\" title=\"struct actix_web::ws::WsStream\">WsStream</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Item = <a class=\"struct\" href=\"bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>, Error = <a class=\"enum\" href=\"actix_web/error/enum.PayloadError.html\" title=\"enum actix_web::error::PayloadError\">PayloadError</a>&gt;,&nbsp;</span>",synthetic:false,types:["actix_web::ws::WsStream"]},];
implementors["futures"] = [];
implementors["h2"] = [{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"h2/client/struct.PushPromises.html\" title=\"struct h2::client::PushPromises\">PushPromises</a>",synthetic:false,types:["h2::client::PushPromises"]},{text:"impl&lt;T, B&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"h2/server/struct.Connection.html\" title=\"struct h2::server::Connection\">Connection</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"bytes/buf/into_buf/trait.IntoBuf.html#associatedtype.Buf\" title=\"type bytes::buf::into_buf::IntoBuf::Buf\">Buf</a>: 'static,&nbsp;</span>",synthetic:false,types:["h2::server::Connection"]},{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"h2/struct.RecvStream.html\" title=\"struct h2::RecvStream\">RecvStream</a>",synthetic:false,types:["h2::share::RecvStream"]},];
implementors["hyper"] = [{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"hyper/struct.Body.html\" title=\"struct hyper::Body\">Body</a>",synthetic:false,types:["hyper::proto::body::Body"]},{text:"impl&lt;I, S, B&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"hyper/server/struct.Serve.html\" title=\"struct hyper::server::Serve\">Serve</a>&lt;I, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Error = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::<a class=\"type\" href=\"futures/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures::stream::Stream::Item\">Item</a>: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"hyper/server/trait.NewService.html\" title=\"trait hyper::server::NewService\">NewService</a>&lt;Request = <a class=\"struct\" href=\"hyper/struct.Request.html\" title=\"struct hyper::Request\">Request</a>, Response = <a class=\"struct\" href=\"hyper/struct.Response.html\" title=\"struct hyper::Response\">Response</a>&lt;B&gt;, Error = <a class=\"enum\" href=\"hyper/error/enum.Error.html\" title=\"enum hyper::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Error = <a class=\"enum\" href=\"hyper/error/enum.Error.html\" title=\"enum hyper::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"futures/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures::stream::Stream::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;,&nbsp;</span>",synthetic:false,types:["hyper::server::Serve"]},{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"hyper/server/struct.AddrIncoming.html\" title=\"struct hyper::server::AddrIncoming\">AddrIncoming</a>",synthetic:false,types:["hyper::server::AddrIncoming"]},];
implementors["reqwest"] = [{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"reqwest/async/struct.Body.html\" title=\"struct reqwest::async::Body\">Body</a>",synthetic:false,types:["reqwest::async_impl::body::Body"]},{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"reqwest/async/struct.Decoder.html\" title=\"struct reqwest::async::Decoder\">Decoder</a>",synthetic:false,types:["reqwest::async_impl::decoder::Decoder"]},];
implementors["tokio_buf"] = [{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"tokio_buf/trait.BufStream.html\" title=\"trait tokio_buf::BufStream\">BufStream</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_buf/util/struct.IntoStream.html\" title=\"struct tokio_buf::util::IntoStream\">IntoStream</a>&lt;T&gt;",synthetic:false,types:["tokio_buf::util::stream::IntoStream"]},];
implementors["tokio_core"] = [{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_core/net/struct.Incoming.html\" title=\"struct tokio_core::net::Incoming\">Incoming</a>",synthetic:false,types:["tokio_core::net::tcp::Incoming"]},{text:"impl&lt;C:&nbsp;<a class=\"trait\" href=\"tokio_core/net/trait.UdpCodec.html\" title=\"trait tokio_core::net::UdpCodec\">UdpCodec</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_core/net/struct.UdpFramed.html\" title=\"struct tokio_core::net::UdpFramed\">UdpFramed</a>&lt;C&gt;",synthetic:false,types:["tokio_core::net::udp::frame::UdpFramed"]},{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_core/reactor/struct.Interval.html\" title=\"struct tokio_core::reactor::Interval\">Interval</a>",synthetic:false,types:["tokio_core::reactor::interval::Interval"]},];
implementors["tokio_fs"] = [{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_fs/struct.ReadDir.html\" title=\"struct tokio_fs::ReadDir\">ReadDir</a>",synthetic:false,types:["tokio_fs::read_dir::ReadDir"]},];
implementors["tokio_io"] = [{text:"impl&lt;A&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/io/struct.Lines.html\" title=\"struct tokio_io::io::Lines\">Lines</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>,&nbsp;</span>",synthetic:false,types:["tokio_io::lines::Lines"]},];
implementors["tokio_signal"] = [{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_signal/unix/struct.Signal.html\" title=\"struct tokio_signal::unix::Signal\">Signal</a>",synthetic:false,types:["tokio_signal::unix::Signal"]},];
implementors["tokio_sync"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_sync/mpsc/struct.Receiver.html\" title=\"struct tokio_sync::mpsc::Receiver\">Receiver</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::mpsc::bounded::Receiver"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_sync/mpsc/struct.UnboundedReceiver.html\" title=\"struct tokio_sync::mpsc::UnboundedReceiver\">UnboundedReceiver</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::mpsc::unbounded::UnboundedReceiver"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_sync/watch/struct.Receiver.html\" title=\"struct tokio_sync::watch::Receiver\">Receiver</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::watch::Receiver"]},];
implementors["tokio_tcp"] = [{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_tcp/struct.Incoming.html\" title=\"struct tokio_tcp::Incoming\">Incoming</a>",synthetic:false,types:["tokio_tcp::incoming::Incoming"]},];
implementors["tokio_timer"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_timer/delay_queue/struct.DelayQueue.html\" title=\"struct tokio_timer::delay_queue::DelayQueue\">DelayQueue</a>&lt;T&gt;",synthetic:false,types:["tokio_timer::delay_queue::DelayQueue"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_timer/throttle/struct.Throttle.html\" title=\"struct tokio_timer::throttle::Throttle\">Throttle</a>&lt;T&gt;",synthetic:false,types:["tokio_timer::throttle::Throttle"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_timer/timeout/struct.Timeout.html\" title=\"struct tokio_timer::timeout::Timeout\">Timeout</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>,&nbsp;</span>",synthetic:false,types:["tokio_timer::timeout::Timeout"]},{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_timer/struct.Interval.html\" title=\"struct tokio_timer::Interval\">Interval</a>",synthetic:false,types:["tokio_timer::interval::Interval"]},];
implementors["tokio_udp"] = [{text:"impl&lt;C:&nbsp;<a class=\"trait\" href=\"tokio_io/codec/decoder/trait.Decoder.html\" title=\"trait tokio_io::codec::decoder::Decoder\">Decoder</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_udp/struct.UdpFramed.html\" title=\"struct tokio_udp::UdpFramed\">UdpFramed</a>&lt;C&gt;",synthetic:false,types:["tokio_udp::frame::UdpFramed"]},];
implementors["tokio_uds"] = [{text:"impl&lt;A, C:&nbsp;<a class=\"trait\" href=\"tokio_io/codec/decoder/trait.Decoder.html\" title=\"trait tokio_io::codec::decoder::Decoder\">Decoder</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_uds/struct.UnixDatagramFramed.html\" title=\"struct tokio_uds::UnixDatagramFramed\">UnixDatagramFramed</a>&lt;A, C&gt;",synthetic:false,types:["tokio_uds::frame::UnixDatagramFramed"]},{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_uds/struct.Incoming.html\" title=\"struct tokio_uds::Incoming\">Incoming</a>",synthetic:false,types:["tokio_uds::incoming::Incoming"]},];
implementors["trust_dns_proto"] = [{text:"impl&lt;S:&nbsp;<a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"trust_dns_proto/tcp/struct.TcpClientStream.html\" title=\"struct trust_dns_proto::tcp::TcpClientStream\">TcpClientStream</a>&lt;S&gt;",synthetic:false,types:["trust_dns_proto::tcp::tcp_client_stream::TcpClientStream"]},{text:"impl&lt;S:&nbsp;<a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"trust_dns_proto/tcp/struct.TcpStream.html\" title=\"struct trust_dns_proto::tcp::TcpStream\">TcpStream</a>&lt;S&gt;",synthetic:false,types:["trust_dns_proto::tcp::tcp_stream::TcpStream"]},{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"trust_dns_proto/udp/struct.UdpClientStream.html\" title=\"struct trust_dns_proto::udp::UdpClientStream\">UdpClientStream</a>",synthetic:false,types:["trust_dns_proto::udp::udp_client_stream::UdpClientStream"]},{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"trust_dns_proto/udp/struct.UdpStream.html\" title=\"struct trust_dns_proto::udp::UdpStream\">UdpStream</a>",synthetic:false,types:["trust_dns_proto::udp::udp_stream::UdpStream"]},{text:"impl&lt;S, MF&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"trust_dns_proto/xfer/dns_multiplexer/struct.DnsMultiplexer.html\" title=\"struct trust_dns_proto::xfer::dns_multiplexer::DnsMultiplexer\">DnsMultiplexer</a>&lt;S, MF&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"trust_dns_proto/xfer/trait.DnsClientStream.html\" title=\"trait trust_dns_proto::xfer::DnsClientStream\">DnsClientStream</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;MF: <a class=\"trait\" href=\"trust_dns_proto/op/message/trait.MessageFinalizer.html\" title=\"trait trust_dns_proto::op::message::MessageFinalizer\">MessageFinalizer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,&nbsp;</span>",synthetic:false,types:["trust_dns_proto::xfer::dns_multiplexer::DnsMultiplexer"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
