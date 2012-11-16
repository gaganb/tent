<<<<<<< HEAD
Ext.data.JsonP.Tent_CollectionFilter({"tagname":"class","name":"Tent.CollectionFilter","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Tent.CollectionFilter","members":{"cfg":[],"property":[{"name":"collection","tagname":"property","owner":"Tent.CollectionFilter","meta":{},"id":"property-collection"},{"name":"filterTemplate","tagname":"property","owner":"Tent.CollectionFilter","meta":{},"id":"property-filterTemplate"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":5304,"files":[{"filename":"tent.js","href":"tent.html#Tent-CollectionFilter"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/tent.html#Tent-CollectionFilter' target='_blank'>tent.js</a></div></pre><div class='doc-contents'><p>Displays a filter panel which will apply the filter choices to a collection.</p>\n\n<p>The actual filter fields are defined by the <a href=\"#!/api/Tent.CollectionFilter-property-filterTemplate\" rel=\"Tent.CollectionFilter-property-filterTemplate\" class=\"docClass\">filterTemplate</a> property.</p>\n\n<h2>Usage</h2>\n\n<pre><code>          {{view <a href=\"#!/api/Tent.CollectionFilter\" rel=\"Tent.CollectionFilter\" class=\"docClass\">Tent.CollectionFilter</a> \n                filterTemplate=\"task_collection_filter\" \n                collectionBinding=\"Pad.remoteCollection\"\n               }}\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-collection' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.CollectionFilter'>Tent.CollectionFilter</span><br/><a href='source/tent.html#Tent-CollectionFilter-property-collection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.CollectionFilter-property-collection' class='name not-expandable'>collection</a><span> : Tent.Collection</span></div><div class='description'><div class='short'><p>The collection which is to be filtered</p>\n</div><div class='long'><p>The collection which is to be filtered</p>\n</div></div></div><div id='property-filterTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.CollectionFilter'>Tent.CollectionFilter</span><br/><a href='source/tent.html#Tent-CollectionFilter-property-filterTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.CollectionFilter-property-filterTemplate' class='name expandable'>filterTemplate</a><span> : Template</span></div><div class='description'><div class='short'>The name of a template which is used to display the filter fields. ...</div><div class='long'><p>The name of a template which is used to display the filter fields.</p>\n\n<p>The filterTemplate should reference the filter fields using the path <strong>view.filter</strong></p>\n\n<p>e.g.</p>\n\n<pre><code>  {{view <a href=\"#!/api/Tent.TextField\" rel=\"Tent.TextField\" class=\"docClass\">Tent.TextField</a> valueBinding=\"view.filter.id\" label=\"ID\"}}\n  {{view <a href=\"#!/api/Tent.TextField\" rel=\"Tent.TextField\" class=\"docClass\">Tent.TextField</a> valueBinding=\"view.filter.title\" label=\"Title\"}}\n  {{view <a href=\"#!/api/Tent.DateField\" rel=\"Tent.DateField\" class=\"docClass\">Tent.DateField</a> valueBinding=\"view.filter.start\" label=\"Start\"}}\n</code></pre>\n</div></div></div></div></div></div></div>"});
=======
Ext.data.JsonP.Tent_CollectionFilter({"tagname":"class","name":"Tent.CollectionFilter","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Tent.CollectionFilter","members":{"cfg":[],"property":[{"name":"collection","tagname":"property","owner":"Tent.CollectionFilter","meta":{},"id":"property-collection"},{"name":"filterTemplate","tagname":"property","owner":"Tent.CollectionFilter","meta":{},"id":"property-filterTemplate"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":5077,"files":[{"filename":"tent.js","href":"tent.html#Tent-CollectionFilter"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/tent.html#Tent-CollectionFilter' target='_blank'>tent.js</a></div></pre><div class='doc-contents'><p>Displays a filter panel which will apply the filter choices to a collection.</p>\n\n<p>The actual filter fields are defined by the <a href=\"#!/api/Tent.CollectionFilter-property-filterTemplate\" rel=\"Tent.CollectionFilter-property-filterTemplate\" class=\"docClass\">filterTemplate</a> property.</p>\n\n<h2>Usage</h2>\n\n<pre><code>          {{view <a href=\"#!/api/Tent.CollectionFilter\" rel=\"Tent.CollectionFilter\" class=\"docClass\">Tent.CollectionFilter</a> \n                filterTemplate=\"task_collection_filter\" \n                collectionBinding=\"Pad.remoteCollection\"\n               }}\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-collection' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.CollectionFilter'>Tent.CollectionFilter</span><br/><a href='source/tent.html#Tent-CollectionFilter-property-collection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.CollectionFilter-property-collection' class='name not-expandable'>collection</a><span> : Tent.Collection</span></div><div class='description'><div class='short'><p>The collection which is to be filtered</p>\n</div><div class='long'><p>The collection which is to be filtered</p>\n</div></div></div><div id='property-filterTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.CollectionFilter'>Tent.CollectionFilter</span><br/><a href='source/tent.html#Tent-CollectionFilter-property-filterTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.CollectionFilter-property-filterTemplate' class='name expandable'>filterTemplate</a><span> : Template</span></div><div class='description'><div class='short'>The name of a template which is used to display the filter fields. ...</div><div class='long'><p>The name of a template which is used to display the filter fields.</p>\n\n<p>The filterTemplate should reference the filter fields using the path <strong>view.filter</strong></p>\n\n<p>e.g.</p>\n\n<pre><code>  {{view <a href=\"#!/api/Tent.TextField\" rel=\"Tent.TextField\" class=\"docClass\">Tent.TextField</a> valueBinding=\"view.filter.id\" label=\"ID\"}}\n  {{view <a href=\"#!/api/Tent.TextField\" rel=\"Tent.TextField\" class=\"docClass\">Tent.TextField</a> valueBinding=\"view.filter.title\" label=\"Title\"}}\n  {{view <a href=\"#!/api/Tent.DateField\" rel=\"Tent.DateField\" class=\"docClass\">Tent.DateField</a> valueBinding=\"view.filter.start\" label=\"Start\"}}\n</code></pre>\n</div></div></div></div></div></div></div>"});
>>>>>>> master
