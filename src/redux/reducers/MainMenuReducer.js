import React from 'react'
import {} from '../../components/home_page/HomePage.scss'
const initialState =[
    {
        id : 0,
        nameAr : 'نقدي',
        name :'Cash Patient' ,
        image : <i className="fas far fa-money-bill-alt"></i>   
    },
    {
        id : 0,
        nameAr : 'قائمة المرضى',
        name :'Patient List' ,
        image : <i className="fas fa-user-injured"></i>   ,
        submenu :[
           { name : 'الجهة'},
           { name : 'الاتفاقية'},
           { name:'إسم المريض'},
           { name : 'رقم الدخول'},
            {name : 'رقم المريض'}
        ]
    },
    {
        id : 0,
        nameAr : 'قائمة الأدوية',
        name :'Medical List' ,
        image :<i className="fas fa-medkit"></i>,
        submenu : [
            {name : 'سعر الوحدة'},
            { name : 'تاريخ إنتهاء الصلاحية'},
            { name:'الكمية'},
            { name : 'الوحدة'},
            { name : 'البيان'},
        ],
        selectedMedicalSubmenu : [
            {name : 'إجمالي'},
            {name : 'سعر الجهة'},
            { name : 'سعر النقدي'},
            { name:'الكمية'},
            { name : 'الوحدة'},
            { name : 'البيان'},
        ]
    },
    {
        id : 0,
        nameAr : 'الفواتير غير المسددة',
        name :'Unpaid Bills' ,
        image :<i className="fas fa-file-invoice-dollar"></i>,
        submenu : [
            {name : 'رقم التسلسل'},
            { name : 'رقم الدخول'},
            { name:'إسم المريض'},
            { name : 'الاتفاقية'},
            { name : 'التاريخ'},
            { name : 'القيمة'},
            { name : 'المستخدم'},

        ]
    },
    {
        id : 0,
        nameAr : ' قائمة مبيعات ',
        name :'Sales List' ,
        image :<i className="fas fa-tasks"></i>,
        submenu : [
            {name : 'رقم الإيصال'},
            { name : 'رقم الدخول'},
            { name:'إسم المريض'},
            { name : 'الاتفاقية'},
            { name : 'التاريخ'},
            { name : 'القيمة'},
            { name : 'المستخدم'},
            { name : 'الصراف'},

        ]   
    },
    {
        id : 0,
        nameAr : '',
        name :'Closing user session' ,
        image :<i className="fas fa-window-close"></i>   
    },
    {
        id : 0,
        nameAr : 'قائمة الأطباء',
        name :'Doctors List' ,
        image :<i className="fas fa-user-md"></i>,
        submenu : [
            {name : 'الرمز'},
            { name : 'الاسم'},
            { name:'الدرجة'},
            { name : 'تخصص الطبيب'}
        ]      
    }

]
const MainMenuReducer = (state= initialState , action) =>{
   
    return state
}
export default MainMenuReducer