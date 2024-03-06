"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[734],{5734:function(e,i,l){l.r(i),l.d(i,{default:function(){return p}});var n=l(824),r=l(4420),a=l(4217),s=l(9273),d=l(7689),o=l(7438),t=l(7236),u=l(9055),c=l(184),v=function(){var e=(0,r.I0)();return(0,r.v9)(a.Qb)?(0,c.jsx)(d.Fg,{to:"/contacts"}):(0,c.jsx)("div",{children:(0,c.jsxs)("form",{onSubmit:function(i){i.preventDefault();var l=i.target,n=l.elements.email.value,r=l.elements.password.value;e((0,s.x4)({email:n,password:r}))},children:[(0,c.jsx)(o.l,{htmlFor:"loginEmail",children:"Email"}),(0,c.jsx)(t.I,{marginBottom:"5",name:"email",id:"loginEmail",type:"email"}),(0,c.jsx)(o.l,{htmlFor:"loginPassword",children:"Password"}),(0,c.jsx)(t.I,{marginBottom:"5",name:"password",id:"loginPassword",type:"password",autoComplete:"off"}),(0,c.jsx)(u.z,{w:"100%",type:"submit",children:"Log In"})]})})},m=l(4270),p=function(){return(0,c.jsxs)("div",{children:[(0,c.jsx)(m.q,{children:(0,c.jsx)("title",{children:"Login"})}),(0,c.jsx)(n.xu,{display:"flex",justifyContent:"center",paddingTop:"80px",children:(0,c.jsx)(v,{})})]})}},5350:function(e,i,l){l.d(i,{NJ:function(){return R},e:function(){return Z}});var n=l(1413),r=l(4925),a=l(9439),s=l(9886),d=l(4591),o=l(5597),t=l(6516),u=l(2996),c=l(5113),v=l(6992),m=l(2791),p=l(184),h=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],b=(0,s.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,a.Z)(b,2),g=x[0],Z=x[1],y=(0,s.k)({strict:!1,name:"FormControlContext"}),I=(0,a.Z)(y,2),q=I[0],R=I[1];var j=(0,o.G)((function(e,i){var l=(0,t.jC)("Form",e),s=function(e){var i=e.id,l=e.isRequired,s=e.isInvalid,o=e.isDisabled,t=e.isReadOnly,u=(0,r.Z)(e,h),c=(0,m.useId)(),p=i||"field-".concat(c),f="".concat(p,"-label"),b="".concat(p,"-feedback"),x="".concat(p,"-helptext"),g=(0,m.useState)(!1),Z=(0,a.Z)(g,2),y=Z[0],I=Z[1],q=(0,m.useState)(!1),R=(0,a.Z)(q,2),j=R[0],k=R[1],F=(0,m.useState)(!1),P=(0,a.Z)(F,2),_=P[0],N=P[1],C=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({id:x},e),{},{ref:(0,d.lq)(i,(function(e){e&&k(!0)}))})}),[x]),B=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({},e),{},{ref:i,"data-focus":(0,v.PB)(_),"data-disabled":(0,v.PB)(o),"data-invalid":(0,v.PB)(s),"data-readonly":(0,v.PB)(t),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:p})}),[p,o,_,s,t,f]),w=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({id:b},e),{},{ref:(0,d.lq)(i,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[b]),T=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)((0,n.Z)({},e),u),{},{ref:i,role:"group","data-focus":(0,v.PB)(_),"data-disabled":(0,v.PB)(o),"data-invalid":(0,v.PB)(s),"data-readonly":(0,v.PB)(t)})}),[u,o,_,s,t]),O=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({},e),{},{ref:i,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!l,isInvalid:!!s,isReadOnly:!!t,isDisabled:!!o,isFocused:!!_,onFocus:function(){return N(!0)},onBlur:function(){return N(!1)},hasFeedbackText:y,setHasFeedbackText:I,hasHelpText:j,setHasHelpText:k,id:p,labelId:f,feedbackId:b,helpTextId:x,htmlProps:u,getHelpTextProps:C,getErrorMessageProps:w,getRootProps:T,getLabelProps:B,getRequiredIndicatorProps:O}}((0,u.Lr)(e)),o=s.getRootProps,b=(s.htmlProps,(0,r.Z)(s,f)),x=(0,v.cx)("chakra-form-control",e.className);return(0,p.jsx)(q,{value:b,children:(0,p.jsx)(g,{value:l,children:(0,p.jsx)(c.m.div,(0,n.Z)((0,n.Z)({},o({},i)),{},{className:x,__css:l.container}))})})}));j.displayName="FormControl",(0,o.G)((function(e,i){var l=R(),r=Z(),a=(0,v.cx)("chakra-form__helper-text",e.className);return(0,p.jsx)(c.m.div,(0,n.Z)((0,n.Z)({},null==l?void 0:l.getHelpTextProps(e,i)),{},{__css:r.helperText,className:a}))})).displayName="FormHelperText"},7438:function(e,i,l){l.d(i,{l:function(){return m}});var n=l(1413),r=l(4925),a=l(5350),s=l(5597),d=l(6516),o=l(2996),t=l(5113),u=l(6992),c=l(184),v=["className","children","requiredIndicator","optionalIndicator"],m=(0,s.G)((function(e,i){var l,s=(0,d.mq)("FormLabel",e),m=(0,o.Lr)(e),h=(m.className,m.children),f=m.requiredIndicator,b=void 0===f?(0,c.jsx)(p,{}):f,x=m.optionalIndicator,g=void 0===x?null:x,Z=(0,r.Z)(m,v),y=(0,a.NJ)(),I=null!=(l=null==y?void 0:y.getLabelProps(Z,i))?l:(0,n.Z)({ref:i},Z);return(0,c.jsxs)(t.m.label,(0,n.Z)((0,n.Z)({},I),{},{className:(0,u.cx)("chakra-form__label",m.className),__css:(0,n.Z)({display:"block",textAlign:"start"},s),children:[h,(null==y?void 0:y.isRequired)?b:g]}))}));m.displayName="FormLabel";var p=(0,s.G)((function(e,i){var l=(0,a.NJ)(),r=(0,a.e)();if(!(null==l?void 0:l.isRequired))return null;var s=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(t.m.span,(0,n.Z)((0,n.Z)({},null==l?void 0:l.getRequiredIndicatorProps(e,i)),{},{__css:r.requiredIndicator,className:s}))}));p.displayName="RequiredIndicator"},7236:function(e,i,l){l.d(i,{I:function(){return f}});var n=l(1413),r=l(4925),a=l(5350),s=l(6992),d=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function t(e){var i=function(e){var i,l,d,t=(0,a.NJ)(),u=e.id,c=e.disabled,v=e.readOnly,m=e.required,p=e.isRequired,h=e.isInvalid,f=e.isReadOnly,b=e.isDisabled,x=e.onFocus,g=e.onBlur,Z=(0,r.Z)(e,o),y=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&y.push(t.feedbackId);(null==t?void 0:t.hasHelpText)&&y.push(t.helpTextId);return(0,n.Z)((0,n.Z)({},Z),{},{"aria-describedby":y.join(" ")||void 0,id:null!=u?u:null==t?void 0:t.id,isDisabled:null!=(i=null!=c?c:b)?i:null==t?void 0:t.isDisabled,isReadOnly:null!=(l=null!=v?v:f)?l:null==t?void 0:t.isReadOnly,isRequired:null!=(d=null!=m?m:p)?d:null==t?void 0:t.isRequired,isInvalid:null!=h?h:null==t?void 0:t.isInvalid,onFocus:(0,s.v0)(null==t?void 0:t.onFocus,x),onBlur:(0,s.v0)(null==t?void 0:t.onBlur,g)})}(e),l=i.isDisabled,t=i.isInvalid,u=i.isReadOnly,c=i.isRequired,v=(0,r.Z)(i,d);return(0,n.Z)((0,n.Z)({},v),{},{disabled:l,readOnly:u,required:c,"aria-invalid":(0,s.Qm)(t),"aria-required":(0,s.Qm)(c),"aria-readonly":(0,s.Qm)(u)})}var u=l(5597),c=l(6516),v=l(2996),m=l(5113),p=l(184),h=["htmlSize"],f=(0,u.G)((function(e,i){var l=e.htmlSize,a=(0,r.Z)(e,h),d=(0,c.jC)("Input",a),o=t((0,v.Lr)(a)),u=(0,s.cx)("chakra-input",e.className);return(0,p.jsx)(m.m.input,(0,n.Z)((0,n.Z)({size:l},o),{},{__css:d.field,ref:i,className:u}))}));f.displayName="Input",f.id="Input"}}]);
//# sourceMappingURL=734.7412d849.chunk.js.map