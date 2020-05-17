//公共函数

//枚举
const obj = {
    checkPhone:/^1[3456789]\d{9}$/,
    checkPassword:/(?!^\d+$)(?!^[A-Za-z]+$)(?!^[^A-Za-z0-9]+$)(?!^.*[\u4E00-\u9FA5].*$)^\S{6,16}$/,
    checkEmail:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
}


//手机校验
const PhoneVerification = (phone) => {
    if(obj.checkPhone.test(phone)){
        return true
    }else{
        return false
    }
};

//密码单独校验
const oneselfPasswords = (password) =>{
    if(obj.checkPassword.test(password)){
        return true
    }else{
        return false
    }
};

//密码校验是否两种格式
const ComparePasswords = (password,twicePassword) => {
    if(obj.checkPassword.test(password)&&obj.checkPassword.test(twicePassword)){
        return true
    }else{
        return false
    }
};

//二次密码校验
const SecondaryVerification = (password,twicePassword) => {
    if(ComparePasswords(password,twicePassword)&&password===twicePassword){
        return true
    }else{
        return false
    }
};

//邮箱校验
const emailVerification = (val) =>{
    if(obj.checkEmail.test(val)){
        return true
    }else{
        return false
    }
}

export {
    PhoneVerification,
    oneselfPasswords,
    ComparePasswords,
    SecondaryVerification,
    emailVerification
}