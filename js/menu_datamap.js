


_menuCloseDelay=500           // The time delay for menus to remain visible on mouse out
_menuOpenDelay=250            // The time delay before menus open on mouse over
_followSpeed=5                // Follow scrolling speed
_followRate=50                // Follow scrolling Rate
_subOffsetTop=4               // Sub menu top offset
_subOffsetLeft=-10            // Sub menu left offset
_scrollAmount=3               // Only needed for Netscape 4.x
_scrollDelay=20               // Only needed for Netcsape 4.x



with(MapSample=new mm_style()){
onbgcolor="#036";
oncolor="#fff";
offbgcolor="#fff";
offcolor="#036";
bordercolor="#036";
borderstyle="solid";
borderwidth=1;
separatorcolor="#ddd";
separatorsize="1";
padding=1;
fontsize="75%";
fontstyle="normal";
fontweight="normal";
fontfamily="Verdana, Tahoma, Arial, Helvetica, sans-serif";
pagecolor="black";
pagebgcolor="#82B6D7";
headercolor="#000";
headerbgcolor="#fff";
subimage="images/global/arrow.gif";
subimagepadding="0";
}


with(milonic=new menuname("Submenu")){
style=MapSample;
top=10;
left=10;
aI("text=Dummy Menu Item 1;");
aI("text=Dummy Menu Item 2;");
aI("text=Dummy Menu Item 3;");
}

with(milonic=new menuname("Lyon")){
style=MapSample;
top=10;
left=10;
aI("text=Lyon;type=header;");
aI("text=Country: France;");
aI("text=Language: French;");
aI("text=Capitol City: Paris;");
aI("text=Latitude: 45n45;");
aI("text=Longitude: 4e51;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("Glasgow")){
style=MapSample;
top=10;
left=10;
aI("text=Glasgow;type=header;");
aI("text=Country: Scotland;");
aI("text=Language: English/Gaelic;");
aI("text=Capitol City: Edinburgh;");
aI("text=Latitude: 55n53;");
aI("text=Longitude: 4w15;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("Toulouse")){
style=MapSample;
top=10;
left=10;
aI("text=Toulouse;type=header;");
aI("text=Country: France;");
aI("text=Language: French;");
aI("text=Capitol City: Paris;");
aI("text=Latitude: 43n36;");
aI("text=Longitude: 1e26;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("Marignane")){
style=MapSample;
top=10;
left=10;
aI("text=Marignane;type=header;");
aI("text=Country: France;");
aI("text=Language: French;");
aI("text=Capitol City: Paris;");
aI("text=Latitude: 43n25;");
aI("text=Longitude: 5e13;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("Madrid")){
style=MapSample;
top=10;
left=10;
aI("text=Madrid;type=header;");
aI("text=Country: Spain;");
aI("text=Language: Spanish, Basque, Galician, Catalan;");
aI("text=Capitol City: Madrid;");
aI("text=Latitude: 40n24;");
aI("text=Longitude: 3w41;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("Barcelona")){
style=MapSample;
top=10;
left=10;
aI("text=Barcelona;type=header;");
aI("text=Country: Spain;");
aI("text=Language: Spanish, Basque, Galician, Catalan;");
aI("text=Capitol City: Madrid;");
aI("text=Latitude: 41n23;");
aI("text=Longitude: 2e11;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("Roma")){
style=MapSample;
top=10;
left=10;
aI("text=Roma;type=header;");
aI("text=Country: Italy;");
aI("text=Language: Italian;");
aI("text=Capitol City: Rome;");
aI("text=Latitude: 41n54;");
aI("text=Longitude: 12e29;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("Napoli")){
style=MapSample;
top=10;
left=10;
aI("text=Capitol City: Rome ;");
aI("text=Napoli;type=header;");
aI("text=Country: Italy;");
aI("text=Language: Italian;");
aI("text=Latitude: 40n51;");
aI("text=Longitude: 14e17;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("Milano")){
style=MapSample;
top=10;
left=10;
aI("text=Milano;type=header;");
aI("text=Country: Italy;");
aI("text=Language: Italian;");
aI("text=Capitol City: Rome ;");
aI("text=Latitude: 45n28;");
aI("text=Longitude: 9e12;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("Hamburg")){
style=MapSample;
top=10;
left=10;
aI("text=Hamburg;type=header;");
aI("text=Country: Germany;");
aI("text=Language: German;");
aI("text=Capitol City: Berlin ;");
aI("text=Latitude: 53n33;");
aI("text=Longitude: 9e59;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("Bruxelles")){
style=MapSample;
top=10;
left=10;
aI("text=Bruxelles;type=header;");
aI("text=Country: Belgium;");
aI("text=Language: Flemish (Dutch), French, German;");
aI("text=Capitol City: Brussels;");
aI("text=Latitude: 50n50;");
aI("text=Longitude: 4e20;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("Amsterdam")){
style=MapSample;
top=10;
left=10;
aI("text=Amsterdam;type=header;");
aI("text=Country: The Netherlands;");
aI("text=Language: Dutch, Frysian;");
aI("text=Capitol City: Amsterdam;");
aI("text=Latitude: 52n17;");
aI("text=Longitude: 4e57;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("Zurich")){
style=MapSample;
top=10;
left=10;
aI("text=Zurich;type=header;");
aI("text=Country: Switzerland;");
aI("text=Languages: French, German, Italian, Romansch;");
aI("text=Capitol City: Berne;");
aI("text=Latitude: 47n23;");
aI("text=Longitude: 8e32;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("Oslo")){
style=MapSample;
top=10;
left=10;
aI("text=Oslo;type=header;");
aI("text=Longitude: 10e45;");
aI("text=Country: Norway ;");
aI("text=Languages: Norwegian;");
aI("text=Capitol City: Oslo ;");
aI("text=Latitude: 59n55;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("Stockholm")){
style=MapSample;
top=10;
left=10;
aI("text=Stockholm;type=header;");
aI("text=Country: Sweden;");
aI("text=Languages: Swedish;");
aI("text=Capitol City: Stockholm ;");
aI("text=Latitude: 59n20;");
aI("text=Longitude: 18e03;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("Berlin")){
style=MapSample;
top=10;
left=10;
aI("text=Berlin;type=header;");
aI("text=Country: Germany;");
aI("text=Language: German;");
aI("text=Capitol City: Berlin ;");
aI("text=Latitude: 52n29;");
aI("text=Longitude: 13e21;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("Manchester")){
style=MapSample;
top=10;
left=10;
aI("text=Manchester;type=header;");
aI("text=Country: United Kingdom;");
aI("text=Language: English;");
aI("text=Latitude: 53n30;");
aI("text=Longitude: 2w15;");
aI("text=Capitol City: London;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("London")){
style=MapSample;
top=10;
left=10;
aI("text=London;type=header;");
aI("text=Country: United Kingdom;");
aI("text=Language: English;");
aI("text=Capitol City: London;");
aI("text=Latitude: 51n30;");
aI("text=Longitude: 0w10;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("Paris")){
style=MapSample;
top=10;
left=10;
aI("text=Paris;type=header;");
aI("text=Country: France;");
aI("text=Language: French;");
aI("text=Capitol City: Paris;");
aI("text=Latitude: 48n52;");
aI("text=Longitude: 2e20;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("Nantes")){
style=MapSample;
top=10;
left=10;
aI("text=Nantes;type=header;");
aI("text=Country: France;");
aI("text=Language: French;");
aI("text=Capitol City: Paris;");
aI("text=Latitude: 48n52;");
aI("text=Longitude: 2e20;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("Frankfurt")){
style=MapSample;
top=10;
left=10;
aI("text=Latitude: 50n07;");
aI("text=Frankfurt;type=header;");
aI("text=Country: Germany;");
aI("text=Language: German;");
aI("text=Capitol City: Berlin ;");
aI("text=Longitude: 8e40;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("copenhagen")){
style=MapSample;
top=10;
left=10;
aI("text=Koebenhavn;type=header;");
aI("text=Country: Denmark;");
aI("text=Languages: Danish;");
aI("text=Capitol City: Copenhagen ;");
aI("text=Latitude: 55n40;");
aI("text=Longitude: 12e35;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("munchen")){
style=MapSample;
top=10;
left=10;
aI("text=Country: Germany;");
aI("text=M³nchen;type=header;");
aI("text=Language: German;");
aI("text=Capitol City: Berlin ;");
aI("text=Latitude: 48n08;");
aI("text=Longitude: 11e34;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

with(milonic=new menuname("weinschwechat")){
style=MapSample;

aI("text=Wien Schwechat;type=header;");
aI("text=Country: Austria;");
aI("text=Languages: German;");
aI("text=Capitol City: Vienna;");
aI("text=Latitude: 48n14;");
aI("text=Longitude: 16e50;");
aI("text=Sub Menus Are allowed;showmenu=Submenu;");
}

drawMenus();

