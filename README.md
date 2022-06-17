# My online resume

This is my react online resume. It was inspired by an other resume based on a boostrap model.

I liked the layout, just took the base and made it my own. This is open Source, meaning you could copy main (delete the workflows) and use it.

Copy the repo, Yarn or Npm install and use Yarn or Npm start to launch it localy. The rest of the commands in the package do what their name says

# ----------📁 Folder structure 📁----------

# 🖼 ASSETS 🖼

This stores images.

- Icons stores the icons.
- Projects stores images for the projects displayed in the app

# 🧩COMPONENTS 🧩

Stores compenents, not much because this is not a complex app. No need to worry about scalability. The app is just there to display elements of a resume. Of
course for a personal website i would fragment the app more to be able to build pages faster. (You can delete the movingSkill, this is for my own resume.)

# 📈 DATA 📉

The place where data gets "fetched". All the files are self-explanatory. You can add more based on your needs, I will add experiences when I get some industry
experiences. If you do don't forget to import the file where it's used, if you want this skills to bear images, import them from the file(follow the project
file for example). Then when the file is ready you just loop over it with a map function.

# 📃 PAGES 📃

Stores the pages.

# 🔧 BUILD 🔨

Contains your build, which will be served localy with the appropriate command.

# 💽 STATIC 💽

Used by the build, this is what you need to be pushed and deploy on an other branch.

# ----------📃 Page File Structure 📃----------

# 📥 IMPORTS 📥

First import what is native and based on the app, then comes the mantine imports or any other library you want to use.

# 📖 CONTENT 📖

The functional component, the app does noting crazy so there are no functions declared.
