#!/usr/bin/env bash

# This file was automatically generated with PreTeXt 2.38.0.
# If you modify this file, PreTeXt will no longer automatically update it.

set -euo pipefail

# Detect architecture and download appropriate Pandoc version
if uname -m | grep -q "aarch64\|arm64"; then
    # ARM architecture
    wget https://github.com/jgm/pandoc/releases/download/3.8.3/pandoc-3.8.3-1-arm64.deb -O pandoc.deb
else
    # x86/amd64 architecture
    wget https://github.com/jgm/pandoc/releases/download/3.8.3/pandoc-3.8.3-1-amd64.deb -O pandoc.deb
fi

# Wait until package manager locks are free (common during container startup).
while fuser /var/lib/dpkg/lock >/dev/null 2>&1 || fuser /var/lib/dpkg/lock-frontend >/dev/null 2>&1; do
    echo "Waiting for apt/dpkg locks to be released..."
    sleep 5
done

# Install pandoc from the downloaded package.
apt-get install -y --no-install-recommends ./pandoc.deb

rm pandoc.deb
