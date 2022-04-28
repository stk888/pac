function FindProxyForURL(url, host) {
  if (localHostOrDomainIs(host, "ticket.urbtix.hk"))
    return DIRECT;
  else if (localHostOrDomainIs(host, "www.urbtix.hk"))
    return DIRECT;
  else if (localHostOrDomainIs(host, "venue.cityline.com"))
    return DIRECT;
  else if (localHostOrDomainIs(host, "www.cityline.com"))
    return DIRECT;
  else
    return "PROXY 192.168.31.237:8124";
}
