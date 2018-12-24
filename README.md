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
    
 5) COMMIT YOUR CHAGES (on the local master): Whenever you finish to modify your code PLEASE commit this one the the local (origin) local branch
 
 Execute the commands:
 
  git add -A
 
 and 
 
  git commit -m "<Here specify a clear but brief message about your modification>"
  
  6) PUSH YOUR CHANGES - !!! after commit!!! -(to the origin remote branch) Whenever you want to share your local code with the team, push the local modfication to the remote GIT branch:
  
  Execute the command:
  
  git push origin development-lursu
  
  In case you see the error below, execute the command:
  
  git pull origin development-lursu
  
 ERROR ON PUSH:
To https://github.com/ittradco-mobile-lab/vit4mobile.git
 ! [rejected]        development-lursu -> development-lursu (fetch first)
error: failed to push some refs to 'https://github.com/ittradco-mobile-lab/vit4mobile.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
  
  
  
HINT:  
To push from your local master to a different remote branch, use:
git push origin master:branch

To have your friends pull this remote branch into their local master, they can use git pull as:
git checkout master
git pull origin branch

This is a test to see if I can push.
  
  
    

