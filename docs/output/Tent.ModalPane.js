Ext.data.JsonP.Tent_ModalPane({"tagname":"class","name":"Tent.ModalPane","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Tent.ModalPane","members":{"cfg":[],"property":[{"name":"autoLaunch","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-autoLaunch"},{"name":"closeAction","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-closeAction"},{"name":"closeTarget","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-closeTarget"},{"name":"customButton","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-customButton"},{"name":"customContent","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-customContent"},{"name":"header","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-header"},{"name":"label","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-label"},{"name":"primaryAction","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-primaryAction"},{"name":"primaryIcon","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-primaryIcon"},{"name":"primaryLabel","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-primaryLabel"},{"name":"primaryTarget","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-primaryTarget"},{"name":"primaryType","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-primaryType"},{"name":"secondaryAction","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-secondaryAction"},{"name":"secondaryIcon","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-secondaryIcon"},{"name":"secondaryLabel","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-secondaryLabel"},{"name":"secondaryTarget","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-secondaryTarget"},{"name":"secondaryType","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-secondaryType"},{"name":"text","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-text"},{"name":"type","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-type"},{"name":"validate","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-validate"},{"name":"warn","tagname":"property","owner":"Tent.ModalPane","meta":{},"id":"property-warn"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":5755,"files":[{"filename":"tent.js","href":"tent.html#Tent-ModalPane"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/tent.html#Tent-ModalPane' target='_blank'>tent.js</a></div></pre><div class='doc-contents'><p>Display a model popup panel.</p>\n\n<p>A button will be displayed to allow the popup to be launched. You provide a <a href=\"#!/api/Tent.ModalPane-property-label\" rel=\"Tent.ModalPane-property-label\" class=\"docClass\">label</a>\nand optionally a <a href=\"#!/api/Tent.ModalPane-property-type\" rel=\"Tent.ModalPane-property-type\" class=\"docClass\">type</a> for the button. If no label is provided, the button will not be displayed\nand the popup will be displayed automatically.\nYou may alternatively associate a separate element to launch the popup when clicked, by specifying a <a href=\"#!/api/Tent.ModalPane-property-customButton\" rel=\"Tent.ModalPane-property-customButton\" class=\"docClass\">customButton</a>\nvalue, which should be the id of the element.</p>\n\n<p>Text to go into the header of the popup is provided using the <a href=\"#!/api/Tent.ModalPane-property-header\" rel=\"Tent.ModalPane-property-header\" class=\"docClass\">header</a> property.</p>\n\n<p>The body of the popup may be provided either by the <a href=\"#!/api/Tent.ModalPane-property-text\" rel=\"Tent.ModalPane-property-text\" class=\"docClass\">text</a> property, or by nesting\ncontent within the view (using {{#view}} rather than {{view}}).</p>\n\n<p>Labels for the button in the popup are provided by the <a href=\"#!/api/Tent.ModalPane-property-primaryLabel\" rel=\"Tent.ModalPane-property-primaryLabel\" class=\"docClass\">primaryLabel</a> and <a href=\"#!/api/Tent.ModalPane-property-secondaryLabel\" rel=\"Tent.ModalPane-property-secondaryLabel\" class=\"docClass\">secondaryLabel</a> properties.</p>\n\n<p>The primary button action is configured using the <a href=\"#!/api/Tent.ModalPane-property-primaryAction\" rel=\"Tent.ModalPane-property-primaryAction\" class=\"docClass\">primaryAction</a> and <a href=\"#!/api/Tent.ModalPane-property-primaryTarget\" rel=\"Tent.ModalPane-property-primaryTarget\" class=\"docClass\">primaryTarget</a> property pair.\nSimilarly use <a href=\"#!/api/Tent.ModalPane-property-secondaryAction\" rel=\"Tent.ModalPane-property-secondaryAction\" class=\"docClass\">secondaryAction</a> and <a href=\"#!/api/Tent.ModalPane-property-secondaryTarget\" rel=\"Tent.ModalPane-property-secondaryTarget\" class=\"docClass\">secondaryTarget</a> for the secondary button.\nThe close button (located at the top right), is bound to the secondary action, unless a <a href=\"#!/api/Tent.ModalPane-property-closeAction\" rel=\"Tent.ModalPane-property-closeAction\" class=\"docClass\">closeAction</a> is provided.</p>\n\n<p>When the dialog is closed by clicking outside the dialog, the secondary action will be called.</p>\n\n<h2>Usage</h2>\n\n<pre><code>  {{#view <a href=\"#!/api/Tent.ModalPane\" rel=\"Tent.ModalPane\" class=\"docClass\">Tent.ModalPane</a>   \n            text=\"_modalText\" \n            buttonClass=\"\"\n            type=\"primary\"\n            header=\"_modalHeader\" \n            primaryLabel=\"_ok\" \n            secondaryLabel=\"_cancel\"\n            primaryAction=\"modalSubmit\"\n            primaryTargetBinding=\"Pad\"\n            secondaryAction=\"modalCancel\"\n            secondaryTargetBinding=\"Pad\"\n            closeAction=\"clearUp\"\n            closeTargetBinding=\"controller\"\n            primaryIcon=\"\"\n            secondaryIcon=\"icon-remove icon-white\"\n        }}\n          &lt;h5&gt;Some more content&lt;/h5&gt;\n    {{/view}}\n</code></pre>\n\n<h4> Validation </h4>\n\n\n<p>The primary button will by default have validation set to true. This means that widgets within the modal dialog\nwill be validated on submission, and any errors that occur will be displayed in an error panel within the modal.\nThe primary button will be disabled until all of the validation errors have been corrected.</p>\n\n<h2>Alternate Usage</h2>\n\n<p>If you need more complex footer content, you can provide it with a dedicated <a href=\"#!/api/Tent.ModalFooter\" rel=\"Tent.ModalFooter\" class=\"docClass\">Tent.ModalFooter</a> view.\nIn this instance, you also need to provide a <a href=\"#!/api/Tent.ModalBody\" rel=\"Tent.ModalBody\" class=\"docClass\">Tent.ModalBody</a> for the body content.</p>\n\n<p>Usage is like:</p>\n\n<pre><code>{{#view <a href=\"#!/api/Tent.ModalPane\" rel=\"Tent.ModalPane\" class=\"docClass\">Tent.ModalPane</a> \n      label=\"Using Custom Footer\" \n      header=\"_modalHeader\" \n      customContent=true\n}}\n  {{#view <a href=\"#!/api/Tent.ModalBody\" rel=\"Tent.ModalBody\" class=\"docClass\">Tent.ModalBody</a>}}\n    body content goes here ...\n  {{/view}}\n  {{#view <a href=\"#!/api/Tent.ModalFooter\" rel=\"Tent.ModalFooter\" class=\"docClass\">Tent.ModalFooter</a>}}\n    {{view <a href=\"#!/api/Tent.Button\" rel=\"Tent.Button\" class=\"docClass\">Tent.Button</a> buttonClass=\"close-dialog pull-left cancel\" label=\"cancel\" type=\"secondary\"}}\n    {{view <a href=\"#!/api/Tent.Button\" rel=\"Tent.Button\" class=\"docClass\">Tent.Button</a> buttonClass=\"\" label=\"go\" type=\"primary\" validate=true}}\n    ... other buttons ...\n  {{/view}}\n{{/view}}\n</code></pre>\n\n<ul>\n<li>In order to use the ModalBody and ModalFooter views, you must set <a href=\"#!/api/Tent.ModalPane-property-customContent\" rel=\"Tent.ModalPane-property-customContent\" class=\"docClass\">customContent</a> to true.</li>\n<li>Any button that will close the dialog should have a css class of 'close-dialog'</li>\n<li>The cancel button should be identified with a css class of 'cancel'. In the event that the Modal is\nclosed by this button, or the 'x' close button, or by clicking outside of the modal, then the action\nassociated with the cancel button will be executed.</li>\n</ul>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-autoLaunch' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-autoLaunch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-autoLaunch' class='name expandable'>autoLaunch</a><span> : Boolean</span></div><div class='description'><div class='short'>A boolean to indicate whether the modal panel will be displayed on entering the\nscreen, regardless of any other prope...</div><div class='long'><p>A boolean to indicate whether the modal panel will be displayed on entering the\nscreen, regardless of any other property settings.</p>\n</div></div></div><div id='property-closeAction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-closeAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-closeAction' class='name expandable'>closeAction</a><span> : String</span></div><div class='description'><div class='short'>The method to execute when the close button is clicked. ...</div><div class='long'><p>The method to execute when the close button is clicked.\nThis will default to the <a href=\"#!/api/Tent.ModalPane-property-secondaryAction\" rel=\"Tent.ModalPane-property-secondaryAction\" class=\"docClass\">secondaryAction</a></p>\n</div></div></div><div id='property-closeTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-closeTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-closeTarget' class='name not-expandable'>closeTarget</a><span> : String</span></div><div class='description'><div class='short'><p>The target providing the action to call when the close button is clicked\nThis will default to the <a href=\"#!/api/Tent.ModalPane-property-secondaryTarget\" rel=\"Tent.ModalPane-property-secondaryTarget\" class=\"docClass\">secondaryTarget</a></p>\n</div><div class='long'><p>The target providing the action to call when the close button is clicked\nThis will default to the <a href=\"#!/api/Tent.ModalPane-property-secondaryTarget\" rel=\"Tent.ModalPane-property-secondaryTarget\" class=\"docClass\">secondaryTarget</a></p>\n</div></div></div><div id='property-customButton' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-customButton' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-customButton' class='name expandable'>customButton</a><span> : String</span></div><div class='description'><div class='short'>will allow us to link the launch of modal pane with the html element whose id we provide. ...</div><div class='long'><p>will allow us to link the launch of modal pane with the html element whose id we provide.\nThis will default to null</p>\n</div></div></div><div id='property-customContent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-customContent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-customContent' class='name expandable'>customContent</a><span> : Boolean</span></div><div class='description'><div class='short'>A boolean indicating that the ModalPane should not provide\nits own body or footer. ...</div><div class='long'><p>A boolean indicating that the ModalPane should not provide\nits own body or footer. A <a href=\"#!/api/Tent.ModalBody\" rel=\"Tent.ModalBody\" class=\"docClass\">Tent.ModalBody</a> and <a href=\"#!/api/Tent.ModalFooter\" rel=\"Tent.ModalFooter\" class=\"docClass\">Tent.ModalFooter</a> may be provided in the nested content.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-header' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-header' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-header' class='name not-expandable'>header</a><span> : String</span></div><div class='description'><div class='short'><p>The text to display in the header section of the modal dialog</p>\n</div><div class='long'><p>The text to display in the header section of the modal dialog</p>\n</div></div></div><div id='property-label' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-label' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-label' class='name not-expandable'>label</a><span> : String</span></div><div class='description'><div class='short'><p>The label for the launch button</p>\n</div><div class='long'><p>The label for the launch button</p>\n</div></div></div><div id='property-primaryAction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-primaryAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-primaryAction' class='name not-expandable'>primaryAction</a><span> : String</span></div><div class='description'><div class='short'><p>The method to execute when the primary button is clicked</p>\n</div><div class='long'><p>The method to execute when the primary button is clicked</p>\n</div></div></div><div id='property-primaryIcon' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-primaryIcon' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-primaryIcon' class='name not-expandable'>primaryIcon</a><span> : String</span></div><div class='description'><div class='short'><p>An icon to display in the primary button</p>\n</div><div class='long'><p>An icon to display in the primary button</p>\n</div></div></div><div id='property-primaryLabel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-primaryLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-primaryLabel' class='name not-expandable'>primaryLabel</a><span> : String</span></div><div class='description'><div class='short'><p>The label for the primary button</p>\n</div><div class='long'><p>The label for the primary button</p>\n</div></div></div><div id='property-primaryTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-primaryTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-primaryTarget' class='name not-expandable'>primaryTarget</a><span> : String</span></div><div class='description'><div class='short'><p>The target providing the action to call when the primary button is clicked</p>\n</div><div class='long'><p>The target providing the action to call when the primary button is clicked</p>\n</div></div></div><div id='property-primaryType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-primaryType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-primaryType' class='name expandable'>primaryType</a><span> : String</span></div><div class='description'><div class='short'>The type of button to display for the primary button. ...</div><div class='long'><p>The type of button to display for the primary button. May be\none of <a href=\"#!/api/Tent.Button-property-type\" rel=\"Tent.Button-property-type\" class=\"docClass\">Tent.Button.type</a></p>\n<p>Defaults to: <code>'primary'</code></p></div></div></div><div id='property-secondaryAction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-secondaryAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-secondaryAction' class='name expandable'>secondaryAction</a><span> : String</span></div><div class='description'><div class='short'>The method to execute when the secondary button is clicked ...</div><div class='long'><p>The method to execute when the secondary button is clicked</p>\n<p>Defaults to: <code>&quot;hide&quot;</code></p></div></div></div><div id='property-secondaryIcon' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-secondaryIcon' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-secondaryIcon' class='name not-expandable'>secondaryIcon</a><span> : String</span></div><div class='description'><div class='short'><p>An icon to display in the secondary button</p>\n</div><div class='long'><p>An icon to display in the secondary button</p>\n</div></div></div><div id='property-secondaryLabel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-secondaryLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-secondaryLabel' class='name not-expandable'>secondaryLabel</a><span> : String</span></div><div class='description'><div class='short'><p>The label for the secondary button</p>\n</div><div class='long'><p>The label for the secondary button</p>\n</div></div></div><div id='property-secondaryTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-secondaryTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-secondaryTarget' class='name expandable'>secondaryTarget</a><span> : String</span></div><div class='description'><div class='short'>The target providing the action to call when the primary button is clicked ...</div><div class='long'><p>The target providing the action to call when the primary button is clicked</p>\n<p>Defaults to: <code>&quot;parentView&quot;</code></p></div></div></div><div id='property-secondaryType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-secondaryType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-secondaryType' class='name expandable'>secondaryType</a><span> : String</span></div><div class='description'><div class='short'>The type of button to display for the secondary button. ...</div><div class='long'><p>The type of button to display for the secondary button. May be\none of <a href=\"#!/api/Tent.Button-property-type\" rel=\"Tent.Button-property-type\" class=\"docClass\">Tent.Button.type</a></p>\n<p>Defaults to: <code>'secondary'</code></p></div></div></div><div id='property-text' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-text' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-text' class='name expandable'>text</a><span> : String</span></div><div class='description'><div class='short'>The text to display in the body section. ...</div><div class='long'><p>The text to display in the body section.\nThe dialog will also display any nested content in the body section, so in that case the\ntext property would be optional</p>\n</div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-type' class='name expandable'>type</a><span> : String</span></div><div class='description'><div class='short'>The type of button used to launch the dialog. ...</div><div class='long'><p>The type of button used to launch the dialog. May be\none of <a href=\"#!/api/Tent.Button-property-type\" rel=\"Tent.Button-property-type\" class=\"docClass\">Tent.Button.type</a></p>\n<p>Defaults to: <code>&quot;primary&quot;</code></p></div></div></div><div id='property-validate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-validate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-validate' class='name expandable'>validate</a><span> : Boolean</span></div><div class='description'><div class='short'>Determines whether the primary button executes validations on\nthe form widgets. ...</div><div class='long'><p>Determines whether the primary button executes validations on\nthe form widgets.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-warn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tent.ModalPane'>Tent.ModalPane</span><br/><a href='source/tent.html#Tent-ModalPane-property-warn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tent.ModalPane-property-warn' class='name expandable'>warn</a><span> : Boolean</span></div><div class='description'><div class='short'>A boolean to indicate that warning messages will be handled by the\nprimary button. ...</div><div class='long'><p>A boolean to indicate that warning messages will be handled by the\nprimary button. If warning messages of a certain severity exist, a popup will be displayed to\nallow the user to chose to ignore the warnings.</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div></div></div>"});