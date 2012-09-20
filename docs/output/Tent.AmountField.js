Ext.data.JsonP.Tent_AmountField({"tagname":"class","name":"Tent.AmountField","extends":"Tent.TextField","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Tent.AmountField","members":{"cfg":[],"property":[{"name":"disabled","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-disabled"},{"name":"formattedValue","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-formattedValue"},{"name":"hasPrefix","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-hasPrefix"},{"name":"helpBlock","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-helpBlock"},{"name":"isEditable","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-isEditable"},{"name":"label","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-label"},{"name":"placeholder","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-placeholder"},{"name":"prefix","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-prefix"},{"name":"readOnly","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-readOnly"},{"name":"required","tagname":"property","owner":"Tent.MandatorySupport","meta":{},"id":"property-required"},{"name":"span","tagname":"property","owner":"Tent.SpanSupport","meta":{},"id":"property-span"},{"name":"textDisplay","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-textDisplay"},{"name":"tooltip","tagname":"property","owner":"Tent.TooltipSupport","meta":{},"id":"property-tooltip"},{"name":"value","tagname":"property","owner":"Tent.FieldSupport","meta":{},"id":"property-value"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":1045,"files":[{"filename":"tent.js","href":"tent.html#Tent-AmountField"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Tent.TextField"],"subclasses":[],"mixedInto":[],"parentMixins":["Tent.FormattingSupport","Tent.FieldSupport","Tent.TooltipSupport"],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Tent.TextField' rel='Tent.TextField' class='docClass'>Tent.TextField</a><div class='subclass '><strong>Tent.AmountField</strong></div></div><h4>Inherited mixins</h4><div class='dependency'><a href='#!/api/Tent.FieldSupport' rel='Tent.FieldSupport' class='docClass'>Tent.FieldSupport</a></div><div class='dependency'><a href='#!/api/Tent.FormattingSupport' rel='Tent.FormattingSupport' class='docClass'>Tent.FormattingSupport</a></div><div class='dependency'><a href='#!/api/Tent.TooltipSupport' rel='Tent.TooltipSupport' class='docClass'>Tent.TooltipSupport</a></div><h4>Files</h4><div class='dependency'><a href='source/tent.html#Tent-AmountField' target='_blank'>tent.js</a></div></pre><div class='doc-contents'><p>Usage</p>\n\n<pre><code>  {{view <a href=\"#!/api/Tent.AmountField\" rel=\"Tent.AmountField\" class=\"docClass\">Tent.AmountField</a> valueBinding=\"\" \n      label=\"\" \n      currency=\"\" \n      required=false\n      readOnly=false\n      disabled=false \n      textDisplayBinding=false\n      tooltip=\"\"\n    }}\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-disabled' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Tent.FieldSupport' rel='Tent.FieldSupport' class='defined-in docClass'>Tent.FieldSupport</a><br/><a href='source/tent.html#Tent-FieldSupport-property-disabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-disabled' class='name expandable'>disabled</a><span> : String</span></div><div class='description'><div class='short'>A boolean indicating that the field is disabled. ...</div><div class='long'><p>A boolean indicating that the field is disabled.\nWhen disabled, the user is prevented from interacting with the field. In addition, if the field\nis tied to a form, its value will not be included in the form submission</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-formattedValue' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Tent.FieldSupport' rel='Tent.FieldSupport' class='defined-in docClass'>Tent.FieldSupport</a><br/><a href='source/tent.html#Tent-FieldSupport-property-formattedValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-formattedValue' class='name not-expandable'>formattedValue</a><span> : String</span></div><div class='description'><div class='short'><p>The current value of the field in its formatted form.</p>\n</div><div class='long'><p>The current value of the field in its formatted form.</p>\n</div></div></div><div id='property-hasPrefix' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Tent.FieldSupport' rel='Tent.FieldSupport' class='defined-in docClass'>Tent.FieldSupport</a><br/><a href='source/tent.html#Tent-FieldSupport-property-hasPrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-hasPrefix' class='name expandable'>hasPrefix</a><span> : Boolean</span></div><div class='description'><div class='short'>A boolean indicating whether a prefix should be displayed before the value ...</div><div class='long'><p>A boolean indicating whether a prefix should be displayed before the value</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-helpBlock' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Tent.FieldSupport' rel='Tent.FieldSupport' class='defined-in docClass'>Tent.FieldSupport</a><br/><a href='source/tent.html#Tent-FieldSupport-property-helpBlock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-helpBlock' class='name not-expandable'>helpBlock</a><span> : String</span></div><div class='description'><div class='short'><p>A block of text which provides additional help for completing the field</p>\n</div><div class='long'><p>A block of text which provides additional help for completing the field</p>\n</div></div></div><div id='property-isEditable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Tent.FieldSupport' rel='Tent.FieldSupport' class='defined-in docClass'>Tent.FieldSupport</a><br/><a href='source/tent.html#Tent-FieldSupport-property-isEditable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-isEditable' class='name expandable'>isEditable</a><span> : Boolean</span></div><div class='description'><div class='short'>A boolean value indicating whether the field is editable ...</div><div class='long'><p>A boolean value indicating whether the field is editable</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-label' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Tent.FieldSupport' rel='Tent.FieldSupport' class='defined-in docClass'>Tent.FieldSupport</a><br/><a href='source/tent.html#Tent-FieldSupport-property-label' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-label' class='name expandable'>label</a><span> : String</span></div><div class='description'><div class='short'>The label for the field. ...</div><div class='long'><p>The label for the field.</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div><div id='property-placeholder' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Tent.FieldSupport' rel='Tent.FieldSupport' class='defined-in docClass'>Tent.FieldSupport</a><br/><a href='source/tent.html#Tent-FieldSupport-property-placeholder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-placeholder' class='name expandable'>placeholder</a><span> : String</span></div><div class='description'><div class='short'>A block of descriptive text to display in the field, usually hint as to the expected content. ...</div><div class='long'><p>A block of descriptive text to display in the field, usually hint as to the expected content.\nThe placeholder will not be recognised as a value, and will be hidden when text is entered into the field.</p>\n</div></div></div><div id='property-prefix' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Tent.FieldSupport' rel='Tent.FieldSupport' class='defined-in docClass'>Tent.FieldSupport</a><br/><a href='source/tent.html#Tent-FieldSupport-property-prefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-prefix' class='name not-expandable'>prefix</a><span> : String</span></div><div class='description'><div class='short'><p>A string value to display as the prefix</p>\n</div><div class='long'><p>A string value to display as the prefix</p>\n</div></div></div><div id='property-readOnly' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Tent.FieldSupport' rel='Tent.FieldSupport' class='defined-in docClass'>Tent.FieldSupport</a><br/><a href='source/tent.html#Tent-FieldSupport-property-readOnly' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-readOnly' class='name expandable'>readOnly</a><span> : String</span></div><div class='description'><div class='short'>A boolean indicating that the field is read-only. ...</div><div class='long'><p>A boolean indicating that the field is read-only.\nAlthough this allows the user to interact with the field (highlight, copy etc), they are not able to change\nits value.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-required' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Tent.MandatorySupport' rel='Tent.MandatorySupport' class='defined-in docClass'>Tent.MandatorySupport</a><br/><a href='source/tent.html#Tent-MandatorySupport-property-required' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.MandatorySupport-property-required' class='name expandable'>required</a><span> : Boolean</span></div><div class='description'><div class='short'>Boolean property to determine whether a value must be provided ...</div><div class='long'><p>Boolean property to determine whether a value must be provided</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-span' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Tent.SpanSupport' rel='Tent.SpanSupport' class='defined-in docClass'>Tent.SpanSupport</a><br/><a href='source/tent.html#Tent-SpanSupport-property-span' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.SpanSupport-property-span' class='name not-expandable'>span</a><span> : Number</span></div><div class='description'><div class='short'><p>The horizontal span which should be allocated to this widget</p>\n</div><div class='long'><p>The horizontal span which should be allocated to this widget</p>\n</div></div></div><div id='property-textDisplay' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Tent.FieldSupport' rel='Tent.FieldSupport' class='defined-in docClass'>Tent.FieldSupport</a><br/><a href='source/tent.html#Tent-FieldSupport-property-textDisplay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-textDisplay' class='name expandable'>textDisplay</a><span> : Boolean</span></div><div class='description'><div class='short'>When set to true, the formatted value of the widget will be displayed,\nrather than the widget itself. ...</div><div class='long'><p>When set to true, the formatted value of the widget will be displayed,\nrather than the widget itself.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-tooltip' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Tent.TooltipSupport' rel='Tent.TooltipSupport' class='defined-in docClass'>Tent.TooltipSupport</a><br/><a href='source/tent.html#Tent-TooltipSupport-property-tooltip' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.TooltipSupport-property-tooltip' class='name not-expandable'>tooltip</a><span> : String</span></div><div class='description'><div class='short'><p>A detailed information message presented as a hover-icon beside the field</p>\n</div><div class='long'><p>A detailed information message presented as a hover-icon beside the field</p>\n</div></div></div><div id='property-value' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Tent.FieldSupport' rel='Tent.FieldSupport' class='defined-in docClass'>Tent.FieldSupport</a><br/><a href='source/tent.html#Tent-FieldSupport-property-value' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.FieldSupport-property-value' class='name not-expandable'>value</a><span> : String</span></div><div class='description'><div class='short'><p>The current value of the field.</p>\n</div><div class='long'><p>The current value of the field.</p>\n</div></div></div></div></div></div></div>"});