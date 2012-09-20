Ext.data.JsonP.Tent_FieldSupport({"tagname":"class","name":"Tent.FieldSupport","extends":null,"mixins":["Tent.SpanSupport","Tent.ValidationSupport","Tent.VisibilitySupport","Tent.MandatorySupport"],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Tent.FieldSupport","members":{"cfg":[],"property":[{"name":"disabled","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-disabled"},{"name":"formattedValue","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-formattedValue"},{"name":"hasPrefix","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-hasPrefix"},{"name":"helpBlock","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-helpBlock"},{"name":"isEditable","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-isEditable"},{"name":"label","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-label"},{"name":"placeholder","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-placeholder"},{"name":"prefix","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-prefix"},{"name":"readOnly","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-readOnly"},{"name":"required","tagname":"property","owner":"Tent.MandatorySupport","meta":{},"id":"property-required"},{"name":"textDisplay","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-textDisplay"},{"name":"value","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-value"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":623,"files":[{"filename":"tent.js","href":"tent.html#Tent-FieldSupport"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":["Tent.TextField","Tent.SlickGrid","Tent.Select","Tent.Textarea"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixins</h4><div class='dependency'><a href='#!/api/Tent.MandatorySupport' rel='Tent.MandatorySupport' class='docClass'>Tent.MandatorySupport</a></div><div class='dependency'><a href='#!/api/Tent.SpanSupport' rel='Tent.SpanSupport' class='docClass'>Tent.SpanSupport</a></div><div class='dependency'><a href='#!/api/Tent.ValidationSupport' rel='Tent.ValidationSupport' class='docClass'>Tent.ValidationSupport</a></div><div class='dependency'><a href='#!/api/Tent.VisibilitySupport' rel='Tent.VisibilitySupport' class='docClass'>Tent.VisibilitySupport</a></div><h4>Mixed into</h4><div class='dependency'><a href='#!/api/Tent.Select' rel='Tent.Select' class='docClass'>Tent.Select</a></div><div class='dependency'><a href='#!/api/Tent.SlickGrid' rel='Tent.SlickGrid' class='docClass'>Tent.SlickGrid</a></div><div class='dependency'><a href='#!/api/Tent.TextField' rel='Tent.TextField' class='docClass'>Tent.TextField</a></div><div class='dependency'><a href='#!/api/Tent.Textarea' rel='Tent.Textarea' class='docClass'>Tent.Textarea</a></div><h4>Files</h4><div class='dependency'><a href='source/tent.html#Tent-FieldSupport' target='_blank'>tent.js</a></div></pre><div class='doc-contents'><p>This mixin provides all of the basic properties and behaviors for a form field view</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-disabled' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.FieldSupport'>Tent.FieldSupport</span><br/><a href='source/tent.html#Tent-FieldSupport-property-disabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-disabled' class='name expandable'>disabled</a><span> : String</span></div><div class='description'><div class='short'>A boolean indicating that the field is disabled. ...</div><div class='long'><p>A boolean indicating that the field is disabled.\nWhen disabled, the user is prevented from interacting with the field. In addition, if the field\nis tied to a form, its value will not be included in the form submission</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-formattedValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.FieldSupport'>Tent.FieldSupport</span><br/><a href='source/tent.html#Tent-FieldSupport-property-formattedValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-formattedValue' class='name not-expandable'>formattedValue</a><span> : String</span></div><div class='description'><div class='short'><p>The current value of the field in its formatted form.</p>\n</div><div class='long'><p>The current value of the field in its formatted form.</p>\n</div></div></div><div id='property-hasPrefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.FieldSupport'>Tent.FieldSupport</span><br/><a href='source/tent.html#Tent-FieldSupport-property-hasPrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-hasPrefix' class='name expandable'>hasPrefix</a><span> : Boolean</span></div><div class='description'><div class='short'>A boolean indicating whether a prefix should be displayed before the value ...</div><div class='long'><p>A boolean indicating whether a prefix should be displayed before the value</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-helpBlock' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.FieldSupport'>Tent.FieldSupport</span><br/><a href='source/tent.html#Tent-FieldSupport-property-helpBlock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-helpBlock' class='name not-expandable'>helpBlock</a><span> : String</span></div><div class='description'><div class='short'><p>A block of text which provides additional help for completing the field</p>\n</div><div class='long'><p>A block of text which provides additional help for completing the field</p>\n</div></div></div><div id='property-isEditable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.FieldSupport'>Tent.FieldSupport</span><br/><a href='source/tent.html#Tent-FieldSupport-property-isEditable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-isEditable' class='name expandable'>isEditable</a><span> : Boolean</span></div><div class='description'><div class='short'>A boolean value indicating whether the field is editable ...</div><div class='long'><p>A boolean value indicating whether the field is editable</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-label' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.FieldSupport'>Tent.FieldSupport</span><br/><a href='source/tent.html#Tent-FieldSupport-property-label' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-label' class='name expandable'>label</a><span> : String</span></div><div class='description'><div class='short'>The label for the field. ...</div><div class='long'><p>The label for the field.</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div><div id='property-placeholder' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.FieldSupport'>Tent.FieldSupport</span><br/><a href='source/tent.html#Tent-FieldSupport-property-placeholder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-placeholder' class='name expandable'>placeholder</a><span> : String</span></div><div class='description'><div class='short'>A block of descriptive text to display in the field, usually hint as to the expected content. ...</div><div class='long'><p>A block of descriptive text to display in the field, usually hint as to the expected content.\nThe placeholder will not be recognised as a value, and will be hidden when text is entered into the field.</p>\n</div></div></div><div id='property-prefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.FieldSupport'>Tent.FieldSupport</span><br/><a href='source/tent.html#Tent-FieldSupport-property-prefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-prefix' class='name not-expandable'>prefix</a><span> : String</span></div><div class='description'><div class='short'><p>A string value to display as the prefix</p>\n</div><div class='long'><p>A string value to display as the prefix</p>\n</div></div></div><div id='property-readOnly' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.FieldSupport'>Tent.FieldSupport</span><br/><a href='source/tent.html#Tent-FieldSupport-property-readOnly' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-readOnly' class='name expandable'>readOnly</a><span> : String</span></div><div class='description'><div class='short'>A boolean indicating that the field is read-only. ...</div><div class='long'><p>A boolean indicating that the field is read-only.\nAlthough this allows the user to interact with the field (highlight, copy etc), they are not able to change\nits value.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-required' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Tent.MandatorySupport' rel='Tent.MandatorySupport' class='defined-in docClass'>Tent.MandatorySupport</a><br/><a href='source/tent.html#Tent-MandatorySupport-property-required' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.MandatorySupport-property-required' class='name expandable'>required</a><span> : Boolean</span></div><div class='description'><div class='short'>Boolean property to determine whether a value must be provided ...</div><div class='long'><p>Boolean property to determine whether a value must be provided</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-textDisplay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.FieldSupport'>Tent.FieldSupport</span><br/><a href='source/tent.html#Tent-FieldSupport-property-textDisplay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-textDisplay' class='name expandable'>textDisplay</a><span> : Boolean</span></div><div class='description'><div class='short'>When set to true, the formatted value of the widget will be displayed,\nrather than the widget itself. ...</div><div class='long'><p>When set to true, the formatted value of the widget will be displayed,\nrather than the widget itself.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-value' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.FieldSupport'>Tent.FieldSupport</span><br/><a href='source/tent.html#Tent-FieldSupport-property-value' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-value' class='name not-expandable'>value</a><span> : String</span></div><div class='description'><div class='short'><p>The current value of the field.</p>\n</div><div class='long'><p>The current value of the field.</p>\n</div></div></div></div></div></div></div>"});