	/*
		pureDOM explorer
		written by Christian Heilmann http://www.onlinetools.org/
		Version 1.0 
		08.10.2003
	*/
	// Presets, should they not be defined
	var parentID=false;
	var extradiv=false;
	var image=false;
	var collapsed='+ ';
	var expanded='- ';
	var children='';
	// Checking for DOM compatibility	
	if (document.getElementById && document.createTextNode && document.createElement){canDOM=true}

	function expinit(){
		if (canDOM){
			if(parentID && document.getElementById(parentID)){
				allas=document.getElementById(parentID).getElementsByTagName('A');
				alluls=document.getElementById(parentID).getElementsByTagName('UL');
				alllis=document.getElementById(parentID).getElementsByTagName('LI');
			}else{
				alluls=document.getElementsByTagName('UL');
				alllis=document.getElementsByTagName('LI');
			}
			// not working in IE, bummer.
			/*for(i=0;i<allas.length;i++){
				allas[i].setAttribute('onclick','ex(this)');
			}*/
			if(extradiv){
				for(i=0;i<alllis.length;i++){
					outsideDiv = document.createElement('SPAN');
					outsideContent = document.createTextNode('');
					outsideDiv.appendChild(outsideContent);
					islink=alllis[i].getElementsByTagName('A')[0];
					if(islink){
						islink.style.paddingLeft="1em";
						islink.style.position="relative";
						islink.insertBefore(outsideDiv,islink.firstChild);
						islink.firstChild.style.width="1em";
						islink.firstChild.style.height="1em";
						islink.firstChild.style.position="absolute";
						islink.firstChild.style.top="0";
						islink.firstChild.style.left="0";
					}
				}
			}
			if(image){
				for(i=0;i<alllis.length;i++){
					islink=alllis[i].getElementsByTagName('A')[0];
					if(islink){
						addimg = document.createElement('img');
						addimg.src=blankpic;
						addimg.style.border='none';
						addimg.alt=picalt;
						addimg.title=pictitle;
						addimg.style.width=picx+'px';
						addimg.style.height=picy+'px';
						addimg.style.marginRight=picmargin+'px';
						islink.insertBefore(addimg,islink.firstChild);
					}
				}
			}
			for(i=0;i<alluls.length;i++){
				subul=alluls[i];
				if(subul.parentNode.tagName=='LI'){
					childs=subul.getElementsByTagName('LI').length
					mom=subul.parentNode.getElementsByTagName('A')[0]
					if(mom){
						if(extradiv){
							momlink=mom.childNodes[1];
							momspan=mom.childNodes[0];
							momspan.firstChild.nodeValue=collapsed;
						}else if(image){
							momlink=mom.childNodes[1];
							momimg=mom.childNodes[0];
							momimg.src=onpic;
						}else{
							momlink=mom.childNodes[0];
							momlink.nodeValue=collapsed+momlink.nodeValue;
						}
						momlink.nodeValue=momlink.nodeValue+children.replace('#',childs); 
						subul.style.display='none';
					}
				}
			}
		}
	}
	
	// Collapse and Expand node.
    function ex(n){
		if(canDOM){
			u=n.parentNode.getElementsByTagName("ul")[0];
			if(u){
				u.style.display=u.style.display=='none'||u.style.display==''?'block':'none';
				if (extradiv){
					str=n.getElementsByTagName('span')[0].firstChild;
					sign = str.nodeValue.substr(0,collapsed.length) == collapsed ? expanded : collapsed;					
					str.nodeValue=sign+str.nodeValue.substr(collapsed.length,str.length);
				}else if(image){
					img=n.getElementsByTagName('img')[0];
					img.src=img.src.indexOf(offpic)!=-1?onpic:offpic;					
				}else if (collapsed && expanded){
					str=n.firstChild.nodeValue;
					sign = str.substr(0,collapsed.length) == collapsed ? expanded : collapsed;					
					n.firstChild.nodeValue= sign + str.substr(collapsed.length,str.length);
				}
			}
		}			
	}
	window.onload=expinit;

