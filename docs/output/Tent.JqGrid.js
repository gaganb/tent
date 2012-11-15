Ext.data.JsonP.Tent_JqGrid({"tagname":"class","name":"Tent.JqGrid","extends":null,"mixins":["Tent.ValidationSupport","Tent.MandatorySupport"],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Tent.JqGrid","members":{"cfg":[],"property":[{"name":"Set","tagname":"property","owner":"Tent.JqGrid","meta":{},"id":"property-Set"},{"name":"collection","tagname":"property","owner":"Tent.JqGrid","meta":{},"id":"property-collection"},{"name":"columnsBinding","tagname":"property","owner":"Tent.JqGrid","meta":{},"id":"property-columnsBinding"},{"name":"fixedHeader","tagname":"property","owner":"Tent.JqGrid","meta":{},"id":"property-fixedHeader"},{"name":"multiSelect","tagname":"property","owner":"Tent.JqGrid","meta":{},"id":"property-multiSelect"},{"name":"onEditRow","tagname":"property","owner":"Tent.JqGrid","meta":{},"id":"property-onEditRow"},{"name":"onRestoreRow","tagname":"property","owner":"Tent.JqGrid","meta":{},"id":"property-onRestoreRow"},{"name":"onSaveCell","tagname":"property","owner":"Tent.JqGrid","meta":{},"id":"property-onSaveCell"},{"name":"pageSize","tagname":"property","owner":"Tent.JqGrid","meta":{},"id":"property-pageSize"},{"name":"paged","tagname":"property","owner":"Tent.JqGrid","meta":{},"id":"property-paged"},{"name":"required","tagname":"property","owner":"Tent.MandatorySupport","meta":{},"id":"property-required"},{"name":"showColumnChooser","tagname":"property","owner":"Tent.JqGrid","meta":{},"id":"property-showColumnChooser"},{"name":"showExportButton","tagname":"property","owner":"Tent.JqGrid","meta":{},"id":"property-showExportButton"},{"name":"showMaximizeButton","tagname":"property","owner":"Tent.JqGrid","meta":{},"id":"property-showMaximizeButton"},{"name":"title","tagname":"property","owner":"Tent.JqGrid","meta":{},"id":"property-title"}],"method":[{"name":"sendAction","tagname":"method","owner":"Tent.JqGrid","meta":{},"id":"method-sendAction"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":2569,"files":[{"filename":"tent.js","href":"tent.html#Tent-JqGrid"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixins</h4><div class='dependency'><a href='#!/api/Tent.MandatorySupport' rel='Tent.MandatorySupport' class='docClass'>Tent.MandatorySupport</a></div><div class='dependency'><a href='#!/api/Tent.ValidationSupport' rel='Tent.ValidationSupport' class='docClass'>Tent.ValidationSupport</a></div><h4>Files</h4><div class='dependency'><a href='source/tent.html#Tent-JqGrid' target='_blank'>tent.js</a></div></pre><div class='doc-contents'><p>Create a jqGrid view which displays the data provided by a Collection object\nThe grid will bind to the following properties of the collection:</p>\n\n<ul>\n<li>columnsDescriptor: an array of descriptor objects defining the columns to be displayed\n\n<pre><code>      e.g. [\n          {id: \"id\", name: \"id\", title: \"_hID\", field: \"id\", sortable: true, hideable: false},\n          {id: \"title\", name: \"title\", title: \"_hTitle\", field: \"title\", sortable: true},\n          {id: \"amount\", name: \"amount\", title: \"_hAmount\", field: \"amount\", sortable: true, formatter: \"amount\",  align: 'right'},\n      ]\n</code></pre></li>\n<li>totalRows: the total number of rows in the entire result set (including pages not visible)</li>\n<li>totalPages: The total number of pages of data available</li>\n</ul>\n\n\n<p>The collection should also provide the following methods:</p>\n\n<ul>\n<li><p>sort(sortdata): Sort the collection according to the sortdata provided</p>\n\n<pre><code>      e.g. \n          {fields: [\n                      sortAsc: true\n                      field: 'title'\n              ]\n          }\n</code></pre></li>\n<li><p>goToPage(pageNumber): Navigate to the pagenumber provided (1 = first page)</p></li>\n</ul>\n\n\n<h2>Usage</h2>\n\n<pre><code>{{view <a href=\"#!/api/Tent.JqGrid\" rel=\"Tent.JqGrid\" class=\"docClass\">Tent.JqGrid</a>\n                label=\"Tasks\"\n                collectionBinding=\"Pad.tasksCollection\"\n                selectionBinding=\"Pad.selectedTasks\"\n                paged=true\n                pageSize=6           \n                multiSelect=true             \n            }}\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-Set' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.JqGrid'>Tent.JqGrid</span><br/><a href='source/tent.html#Tent-JqGrid-property-Set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.JqGrid-property-Set' class='name not-expandable'>Set</a><span> : Boolean</span></div><div class='description'><div class='short'><p>this property to true to deselect all the selected items and restore all the editable fields.</p>\n</div><div class='long'><p>this property to true to deselect all the selected items and restore all the editable fields.</p>\n</div></div></div><div id='property-collection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.JqGrid'>Tent.JqGrid</span><br/><a href='source/tent.html#Tent-JqGrid-property-collection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.JqGrid-property-collection' class='name not-expandable'>collection</a><span> : Object</span></div><div class='description'><div class='short'><p>The collection object providing the API to the data source</p>\n</div><div class='long'><p>The collection object providing the API to the data source</p>\n</div></div></div><div id='property-columnsBinding' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.JqGrid'>Tent.JqGrid</span><br/><a href='source/tent.html#Tent-JqGrid-property-columnsBinding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.JqGrid-property-columnsBinding' class='name expandable'>columnsBinding</a><span> : Array</span></div><div class='description'><div class='short'>The array of column descriptors used to represent the data. ...</div><div class='long'><p>The array of column descriptors used to represent the data.\nBy default this will be retrieved from the collection</p>\n<p>Defaults to: <code>'collection.columnsDescriptor'</code></p></div></div></div><div id='property-fixedHeader' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.JqGrid'>Tent.JqGrid</span><br/><a href='source/tent.html#Tent-JqGrid-property-fixedHeader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.JqGrid-property-fixedHeader' class='name expandable'>fixedHeader</a><span> : Boolean</span></div><div class='description'><div class='short'>Boolean indicating that the header remains in view when the content is scrolled. ...</div><div class='long'><p>Boolean indicating that the header remains in view when the content is scrolled.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-multiSelect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.JqGrid'>Tent.JqGrid</span><br/><a href='source/tent.html#Tent-JqGrid-property-multiSelect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.JqGrid-property-multiSelect' class='name expandable'>multiSelect</a><span> : Boolean</span></div><div class='description'><div class='short'>Boolean indicating that the list is a multi-select list ...</div><div class='long'><p>Boolean indicating that the list is a multi-select list</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-onEditRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.JqGrid'>Tent.JqGrid</span><br/><a href='source/tent.html#Tent-JqGrid-property-onEditRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.JqGrid-property-onEditRow' class='name expandable'>onEditRow</a><span> : Function</span></div><div class='description'><div class='short'>A callback function which will be called when a row is made editable. ...</div><div class='long'><p>A callback function which will be called when a row is made editable.\nThe context of the function is this JqGrid View, and it will accept the following parameters:</p>\n\n<p>-rowId: the id of the selected row\n-grid: the jqGrid</p>\n</div></div></div><div id='property-onRestoreRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.JqGrid'>Tent.JqGrid</span><br/><a href='source/tent.html#Tent-JqGrid-property-onRestoreRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.JqGrid-property-onRestoreRow' class='name expandable'>onRestoreRow</a><span> : Function</span></div><div class='description'><div class='short'>A callback function which will be called when editing of a row is cancelled,\nand the original values restored to the ...</div><div class='long'><p>A callback function which will be called when editing of a row is cancelled,\nand the original values restored to the cells.\nThe context of the function is this JqGrid View, and it will accept the following parameters:</p>\n\n<p>-rowId: the id of the selected row\n-grid: the jqGrid</p>\n</div></div></div><div id='property-onSaveCell' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.JqGrid'>Tent.JqGrid</span><br/><a href='source/tent.html#Tent-JqGrid-property-onSaveCell' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.JqGrid-property-onSaveCell' class='name expandable'>onSaveCell</a><span> : Function</span></div><div class='description'><div class='short'>A callback function which will be called when an editable cell is saved. ...</div><div class='long'><p>A callback function which will be called when an editable cell is saved. (This\nusually occurs on change or blur)\nThe context of the function is this JqGrid View, and it will accept the following parameters:</p>\n\n<p>-rowId: the id of the selected row\n-grid: the jqGrid\n-cellName: the name of the edited cell\n-iCell: the position of the edited cell</p>\n</div></div></div><div id='property-pageSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.JqGrid'>Tent.JqGrid</span><br/><a href='source/tent.html#Tent-JqGrid-property-pageSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.JqGrid-property-pageSize' class='name expandable'>pageSize</a><span> : Number</span></div><div class='description'><div class='short'>The number of items in each page ...</div><div class='long'><p>The number of items in each page</p>\n<p>Defaults to: <code>12</code></p></div></div></div><div id='property-paged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.JqGrid'>Tent.JqGrid</span><br/><a href='source/tent.html#Tent-JqGrid-property-paged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.JqGrid-property-paged' class='name expandable'>paged</a><span> : Boolean</span></div><div class='description'><div class='short'>Boolean to indicate the data should be presented as a paged list ...</div><div class='long'><p>Boolean to indicate the data should be presented as a paged list</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-required' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Tent.MandatorySupport' rel='Tent.MandatorySupport' class='defined-in docClass'>Tent.MandatorySupport</a><br/><a href='source/tent.html#Tent-MandatorySupport-property-required' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.MandatorySupport-property-required' class='name expandable'>required</a><span> : Boolean</span></div><div class='description'><div class='short'>Boolean property to determine whether a value must be provided ...</div><div class='long'><p>Boolean property to determine whether a value must be provided</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-showColumnChooser' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.JqGrid'>Tent.JqGrid</span><br/><a href='source/tent.html#Tent-JqGrid-property-showColumnChooser' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.JqGrid-property-showColumnChooser' class='name expandable'>showColumnChooser</a><span> : Boolean</span></div><div class='description'><div class='short'>Display a button at the top of the grid which presents\na dialog to show/hide columns. ...</div><div class='long'><p>Display a button at the top of the grid which presents\na dialog to show/hide columns. Any columns which have a property <strong>'hideable:false'</strong> will not be shown\nin this dialog</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-showExportButton' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.JqGrid'>Tent.JqGrid</span><br/><a href='source/tent.html#Tent-JqGrid-property-showExportButton' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.JqGrid-property-showExportButton' class='name expandable'>showExportButton</a><span> : Boolean</span></div><div class='description'><div class='short'>Display a button in the header which allows the table data to\nbe exported a selected format. ...</div><div class='long'><p>Display a button in the header which allows the table data to\nbe exported a selected format.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-showMaximizeButton' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.JqGrid'>Tent.JqGrid</span><br/><a href='source/tent.html#Tent-JqGrid-property-showMaximizeButton' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.JqGrid-property-showMaximizeButton' class='name expandable'>showMaximizeButton</a><span> : Boolean</span></div><div class='description'><div class='short'>Display a button at the top of the grid which presents\na dialog to maximize the grid view. ...</div><div class='long'><p>Display a button at the top of the grid which presents\na dialog to maximize the grid view.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-title' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.JqGrid'>Tent.JqGrid</span><br/><a href='source/tent.html#Tent-JqGrid-property-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.JqGrid-property-title' class='name not-expandable'>title</a><span> : String</span></div><div class='description'><div class='short'><p>The title caption to appear above the table</p>\n</div><div class='long'><p>The title caption to appear above the table</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-sendAction' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.JqGrid'>Tent.JqGrid</span><br/><a href='source/tent.html#Tent-JqGrid-method-sendAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.JqGrid-method-sendAction' class='name expandable'>sendAction</a>( <span class='pre'>action, element, rowId</span> )</div><div class='description'><div class='short'>send and action to the router. ...</div><div class='long'><p>send and action to the router. This is called from the 'action' formatter</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>action</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>rowId</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});