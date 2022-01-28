var office=document.evaluate("//span[contains(.,'+251')]",document,null,XPathResult.STRING_TYPE,null)
var officeNumber=office.stringValue//'+251 (11) 650 7058'
officeNumber.length //18
var f=officeNumber["14"]

var g=officeNumber["15"]

var h=officeNumber["16"]

var i=officeNumber["17"]

var officeNum=f+g+h+i//7058
var officeNumber=Number(officeNum)

var mobile=document.evaluate("//span[contains(.,'+1')]",document,null,XPathResult.STRING_TYPE,null)
var mobileNum=mobile.stringValue
mobileNum.length
17
var a=mobileNum["13"]

var b=mobileNum["15"]

var c=mobileNum["l6"]
var mobileNumb=a+a+b+c
var mobileNumber=Number(mobileNumb)
var result=officeNumber/mobileNum
console.log(result)
