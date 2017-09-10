**Chapter 1 - Intro a NodeJS**

Currently I'm using A version of Ubuntu named Kubuntu.
After running <lsb_release -a> I get:
<
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 15.04
Release:	15.04
Codename:	vivid
>

With this version I had some trouble installeing Node JS so I had to go to the [NODESOURCE](https://github.com/nodesource/distributions#debinstall) and find a distribution that could install well.

Intallation (The version that was ok for me was):

<sudo curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash ->
<sudo apt-get install -y nodejs>

After installing, write the following in console:

<nodejs -v> # => v4.4.2
<npm -v> # => 2.xxx
So I update npm to latest version with:
<sudo npm install -g npm>
And now
<npm -v> # => 5.4.1

After that I just continued with the course,

so for getting node JS console for this version of node, use_:
<nodejs>

**CONTENT**
- 1_calculator.js

Simple command application for a simple calculator, to run just go to the terminal, got to cap1/ and run <nodejs 1_caculator.js 2 + 5> # => 7 .

In this file you will also find the way to get arguments from command line apps with the use of <process.argv>;