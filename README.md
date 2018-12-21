PREREQUISITES

0) Open a windows command prompt
1) NODE: Check if you have installed the NODE executing the command:
   
   node -v ==> v10.14.2 - on my case -
   
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

 3) VISUAL STUDIO CODE: Install the latest version of VCS from https://code.visualstudio.com/
 
 4) GIT: Install https://git-scm.com/download/win and check executing the command: 
    
    git --version ==> git version 2.19.2.windows.1 - on my case -
    
    
CREATE THE IONIC PROJECT 

1) Create a new directory (ex. C:\myprojects)

2) CD to the new directory: cd myprojects

3) Clone the project into the current directory. Open the terminal (win comand prompt) and excute the command:

git clone -b development-lursu https://github.com/ittradco-mobile-lab/vit4mobile.git

That will create a local copy of the remote project into a new vit4mobile directory. So you'll find the project
on C:\myproject\vit4mobile

4) cd vit4mobile and Execute the command 
    
    code . 
    That wil open the visual studion code editor and you'll be able to work with you project.
    
 5) Whenever you finish to modify your code PLEASE commit this one the the local (origin) local branch
 
 Execute the commands:
 
  git add -A
 
 and 
 
  git commit -m "<Here specify a clear but brief message about your modification>"
  
  6) Whenever you want to share your local code with the team, push the local modfication to the remote GIT branch:
  
  Execute the command:
  
  
    

