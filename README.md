# Web assignment

This is Web assignment Project.

# Architecture

*Followed MVVC architecture
*The file architecture followed in the project is that, there is an artist-setup Folder inside an app-folder.
*Inside artist-setup, we have service,common-constant file,enum,interface and components folder that contains all the components related to artist-setup.
*In service I am fetching an artist and the events related to an artist
*Inside src folder,we have Custom-Theme file for providing any desired theme to the whole app.
*The asset folder contains variables for css and mixins.
\*When a user will search an artist and its events, artist and their events will be saved in session storage which will be used later if user again search for that specific artist to
prevent an extra-api calls

# Design Choices

*used Angular material components for attractive cards and theme.
*I followed the grid view to show cards
*Used Sass for better,organized code and to prevent repetition of css
*Design was kept formal using bootstrap row column to optimize code with lesser custom css
