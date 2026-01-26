important---Package.json file is the configuration for npm.

There are basically 2 types of dependencies that we install using npm{
    1. Dev dependencies- There are the dependencies which we use only in the development days.
    2. Non Dev dependencies - These are those dependencies which we can use in both development as well as in production phase.
}

Now in the package.json in the devDependencies section we have installed the dependency as well as the latest version so there are 
basically two types of notations that we use when we are marking the version of any dependency {
    1. caret - for example parecel: "^2.8.4"
       in this (^) this is known as caret which basically means that if any minor upgrade has announced by the parcel so this will
       automatically upgrade the minor version such as 2.8.4 or 2.8.5 
    2. tilde(~) - for example parcel: "2.8.4"
       in this (~) this is known as tilde and if any major update is announced by the parcel liek 3.0.0 then that package is upgraded
       automatically, which might have several changes that could affect the integrity of the app.
}
So we always prefer ^ over ~ .

ques - Difference between package.json and package-lock.json?
ans - package.json file has the expected or approximate version of any dependencies installed.
      but the package-lock.json has the exact version of that particular dev dependency and lock this file to have a track which version 
      was installed at the beginning of the installation.

QUES - What is known as the sha512 hash ?
ANS - It is basically an integrity of the package-lock.json which keeps a track of the version which is being build to production, means
the same version should be pushed to production which is seamlessly running in my local machine.

QUES - What do you mean by the Transitive dependencies?
ANS - When we install let say parcel as a dependency for our project then parcel is itself a project which require some other dependency
to run and those require some other dependency to run and the chain goes on and on....
this is called the Transitive dependencies where a chain is made up from the one to another by dependencies...

-----Important------
We do not have to push the node_modules into the gitub but we have to push the package.json and package-lock.json, because we have the 
superpower to regenrate the node_modules with the help of package.json and package-lock.json.

