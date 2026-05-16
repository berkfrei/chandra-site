#!/usr/bin/env bash
[ -f /etc/imm/studio.env ] && set -a && . /etc/imm/studio.env && set +a
cd "/home/isaacworkshop/imm-clients/chandra"
exec tmux new-session -A -s "chandra"
