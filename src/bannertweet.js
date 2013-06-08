/*
  * bannerTweet-Google-Chrome-Extension (Estensione per Google Chrome)
  *   Copyright (C) 2012 Sergio Terrasi
  *   
  *   This program is free software; you can redistribute it and/or
  *   modify it under the terms of the GNU General Public License
  *   as published by the Free Software Foundation; either version 2
  *   of the License, or (at your option) any later version.
  *   
  *   This program is distributed in the hope that it will be useful,
  *   but WITHOUT ANY WARRANTY; without even the implied warranty of
  *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  *   GNU General Public License for more details.
  *   
  *   You should have received a copy of the GNU General Public License
  *   along with this program; if not, write to the Free Software
  *   Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
  *   
  */
window.addEventListener("load",function() {
	var a=document.createElement("a");
	a.innerHTML="bannerTweet";
	a.addEventListener("click",function(e) {
		e.preventDefault();
		e.stopPropagation();
		var el=this.parentNode.parentNode;
		while(!el.getAttribute("data-item-id")&&el.parentNode) el=el.parentNode;
		var tweetid=el.getAttribute("data-item-id");
		if(tweetid) {
			var url="http://bannertweet.nerdissimo.it/#"+tweetid;
			try {
				chrome.tabs.create({
					"url":url,
					"active":true
				});
			}
			catch(e) {
				window.open(url);
			}
		}
		else alert("Ops. I can't find data. Report it to @Nerdissimo.");
	},false);
	var li=document.createElement("li");
	li.appendChild(a);
	document.getElementsByClassName("stream-container")[0].addEventListener("click",function(e) {
		var el=e.target,notfound=true,boom=0;
		while(el.className!="more-tweet-actions"&&el.parentNode) el=el.parentNode;
		if(el.className=="more-tweet-actions") {
			var menu=el.getElementsByClassName("dropdown-menu")[0];
			menu.appendChild(li);
		}
	},false);
},false);