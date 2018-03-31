#@echo off
title batch for cmd HW 1
md testfolder


cd "./testfolder"
md subfolder

cd "./subfolder"

echo > index.html
type index.html
sample html

cd.. 

start subfolder