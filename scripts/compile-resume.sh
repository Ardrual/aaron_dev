#!/bin/bash
set -e

# Configuration
VERSION="0.15.0"
OUTPUT_DIR="public"
INPUT_FILE="src/content/resume/resume.tex"
TECTONIC_BIN="./scripts/tectonic"

# Detect OS and architecture
OS=$(uname -s)
ARCH=$(uname -m)

if [ "$OS" == "Darwin" ]; then
    if [ "$ARCH" == "x86_64" ]; then
        URL="https://github.com/tectonic-typesetting/tectonic/releases/download/tectonic@$VERSION/tectonic-$VERSION-x86_64-apple-darwin.tar.gz"
    elif [ "$ARCH" == "arm64" ] || [ "$ARCH" == "aarch64" ]; then
        URL="https://github.com/tectonic-typesetting/tectonic/releases/download/tectonic@$VERSION/tectonic-$VERSION-aarch64-apple-darwin.tar.gz"
    else
        echo "Unsupported architecture: $ARCH"
        exit 1
    fi
elif [ "$OS" == "Linux" ]; then
    if [ "$ARCH" == "x86_64" ]; then
        URL="https://github.com/tectonic-typesetting/tectonic/releases/download/tectonic@$VERSION/tectonic-$VERSION-x86_64-unknown-linux-musl.tar.gz"
    elif [ "$ARCH" == "aarch64" ] || [ "$ARCH" == "arm64" ]; then
        URL="https://github.com/tectonic-typesetting/tectonic/releases/download/tectonic@$VERSION/tectonic-$VERSION-aarch64-unknown-linux-musl.tar.gz"
    else
        echo "Unsupported architecture: $ARCH"
        exit 1
    fi
else
    echo "Unsupported OS: $OS"
    exit 1
fi

# Download and extract Tectonic if not present
if [ ! -f "$TECTONIC_BIN" ]; then
    echo "Downloading Tectonic v$VERSION for $ARCH..."
    curl -L "$URL" | tar -xz -C ./scripts/
    chmod +x "$TECTONIC_BIN"
fi

# Create output dir if not exists
mkdir -p "$OUTPUT_DIR"

# Compile LaTeX
echo "Compiling $INPUT_FILE..."
$TECTONIC_BIN "$INPUT_FILE" --outdir "$OUTPUT_DIR"

echo "Tectonic compilation finished."

# Verify output
if [ -f "$OUTPUT_DIR/resume.pdf" ]; then
    echo "Successfully compiled resume to $OUTPUT_DIR/resume.pdf"
else
    echo "Error: resume.pdf was not generated."
    exit 1
fi
