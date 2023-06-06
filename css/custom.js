// Écouteur d'événement pour le menu de filtrage
document.getElementById('keyword-menu').addEventListener('click', function(e) {
    // if (e.target && e.target.nodeName === 'LI') {
    // 	var keyword = e.target.getAttribute('data-keyword');
    // 	filterArticles(keyword);
    // 	setActiveItem(e.target);
    // }
    
    if(e.target && e.target.className === 'category-header'){

	
	var keyword = e.target.parentNode.parentNode.getAttribute('data-keyword');
	filterArticles(keyword);

	if(e.target.tagName === 'DIV') {
	    setActiveItem(e.target.parentNode.parentNode);
	}


    }

    if (e.target && e.target.className === 'dropdownlink') {
	var keyword = e.target.parentNode.getAttribute('data-keyword');
	filterArticles(keyword);

	if(e.target.tagName === 'DIV') {
	    setActiveItem(e.target.parentNode);
	}

	
    }
});


// Fonction pour filtrer les articles en fonction des mots-clés
function filterArticles(keyword) {
  var articles = document.getElementsByClassName('article');
  
  for (var i = 0; i < articles.length; i++) {
    var article = articles[i];
    var keywords = article.getAttribute('data-keywords').split(',');
    
    if (keyword === 'all' || keywords.includes(keyword)) {
      article.classList.remove('hidden');
    } else {
      article.classList.add('hidden');
    }
  }


    // Vérifier les sections pour masquer les titres sans articles visibles
    var sections = document.querySelectorAll('h2.h-article, h3');
//    alert(sections.length);
    sections.forEach(function(section) {
	var hasVisibleArticles = false;

	var articlesInSection = section.parentNode.querySelectorAll('.article');

	
	articlesInSection.forEach(function(article) {
	    if (!article.classList.contains('hidden')) {
		hasVisibleArticles = true;
	    }
	});

	
	// Masquer le titre de section si aucun article n'est visible
	if (!hasVisibleArticles) {
	    section.style.display = 'none';
	} else {
	    section.style.display = 'block';
	}
    });
}


// Fonction pour définir l'élément actif dans le menu
function setActiveItem(item) {
  var items = document.getElementsByTagName('li');
  
  for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
      items[i].classList.add('inactive');
  }

    var submenu = document.getElementsByClassName('submenuItems');

    for(var i = 0; i < submenu.length; i++){
	submenu[i].style.display = 'none';
    }

    item.classList.remove('inactive');
    item.classList.add('active');
    

    
    for (var i = 0; i < item.childNodes.length; i++) {
	if (item.childNodes[i].className == "dropdownlink") {

	    
	    var ch = item.childNodes[i];
	    for (var j = 0; j < ch.childNodes.length; j++) {
		if(ch.childNodes[j].className=="submenuItems"){
		    ch.childNodes[j].style.display = 'block';

		}

	    }
	}
    //   notes = doc.childNodes[i];
	//   break;

    // }        
    }
}

// Afficher tous les articles au chargement de la page
filterArticles('all');


document.getElementById('type-container').addEventListener('click', function(e) {
    
    
    if(e.target && e.target.tagName === 'A' && e.target.parentNode.className === 'btn'){
	filterByType(e.target.textContent);
    }

    

    
});


function filterByType(type) {

  var sec = document.getElementsByClassName('h-article');
    for (var i = 0; i < sec.length; i++) {
	sec[i].parentNode.style.display = 'block';
    }
    if(type != 'All')
    for (var i = 0; i < sec.length; i++) {
	if(type != sec[i].textContent){
	    sec[i].parentNode.style.display = 'none';
	} 

    }

}

