#!/bin/bash

latest_entry=$(awk '/^## \[/{if (found) exit; found=1} found' CHANGELOG.md)

if grep -q "# Latest Release" README.md; then
    sed -i '' -e '/# Latest Release/q' README.md
    printf "\n%s\n\n" "$latest_entry" >> README.md
fi
