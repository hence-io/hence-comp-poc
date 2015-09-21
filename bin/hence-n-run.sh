#!/usr/bin/env bash

cd components

cd hence-card
gulp build
cd ..

cd hence-user
gulp build
cd ..

cd hence-user-card
gulp build
cd ..

cd ..
. bin/rsync.sh
gulp
