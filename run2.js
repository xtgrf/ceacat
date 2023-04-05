#!/bin/sh
UUID=${UUID:-'aa301233-5451-4184-8e27-1bec6b80db27'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
