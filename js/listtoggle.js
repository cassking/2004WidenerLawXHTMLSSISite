//------------------------------------------------------//--script created by: Egor Kloos http://www.dutchcelt.nl/links/// Links page list togglefunction displayUL(){    if(document.getElementById) {        var L=new Array('ul01','none','ul02','none','ul03','none','ul04','none','ul05','none','ul06','none','ul07','none','ul08','none');        for(n=0;n<L.length;n=n+2){            document.getElementById(L[n]).style.display=L[n+1];        }    }}function toggleList(id){    if(document.getElementById) {        var le = document.getElementById(id);        le.style.display = (le.style.display == 'none') ? 'block' : 'none';    }}// End Links page list toggle//------------------------------------------------------