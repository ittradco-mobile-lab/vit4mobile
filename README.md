Pre-requisits:

0) Open a windows command prompt
1) NODE: Check if you have installed the NODE executing the command:
   
   node -v
   
   YES?: If the response will be for instance v10.14.2 (thats the current version I've installed on my PC) then continue to the other steps
         Execute also npm -v to check the package manager for all the various javascript packages we'll use.
         
   NO? : If the sersponse will: "'node' is not recognized as an internal or external command, operable program or batch file." 
   then you need to install nodejs to be able to continue. 
   Go to to the node js site: https://nodejs.org and install the recommended version

2) IONIC and CORDOVA: Check you have installed ionic and cordova on your machine executing the commands:

    ionic --version ==> 4.6.0 - on my case -
    cordova -v      == > 8.1.2 (cordova-lib@8.1.1) - on my case -
    
    YES:? If the response it was 4.6.0 (ionic) and 8.1.2 (cordova-lib@8.1.1)
    NO? : Then install the ionic and cordova on your machine.
          To do that on the opened command promt execute: 
          
          npm install ionic cordova -g



1) Create a new directory (i.e. C:\myprojects)

2) CD to the new directory: cd myprojects

3) Install the GIT
4) Clone the project into the current directory. That will create a local copy of the project into vit4mobile new created directory
git clone -b development-lursu https://github.com/ittradco-mobile-lab/vit4mobile.git
5) Install Visual Studi Code
6) Execute code .
