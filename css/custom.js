const map = new Map()
      .set("article", new Map()
           .set("en", "article")
           .set("de", "Hinweis"))
)
;
replace_admonition('article', map);
