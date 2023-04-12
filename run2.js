#!/bin/sh
UUID=${UUID:-'8a8e79f0-430d-4f6f-a97e-bf1db519ba58'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
