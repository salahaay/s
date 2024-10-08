// تسجيل الدخول للمستخدم
function loginUser() {
    const companyType = document.getElementById('company-type').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert(`تم تسجيل دخولك كـ ${companyType}. مرحبًا ${username}!`);
    } else {
        alert('يرجى إدخال جميع المعلومات.');
    }
}

// تحديد الصلاحيات للمدير المالي
function setPermissions() {
    const permissions = [];
    if (document.getElementById('purchase-access').checked) permissions.push('المشتريات');
    if (document.getElementById('payment-access').checked) permissions.push('المدفوعات');
    if (document.getElementById('report-access').checked) permissions.push('التقارير');

    alert(`تم تحديد الصلاحيات التالية: ${permissions.join(', ')}`);
}

// رفع طلب مراجع
function submitAuditRequest() {
    const details = document.getElementById('request-details').value;
    const auditor = document.getElementById('auditor').value;

    if (details) {
        document.getElementById('audit-requests').innerHTML = `
            <p>طلب مراجعة جديد من مراجع ${auditor}:</p>
            <p>${details}</p>
        `;
    } else {
        alert('يرجى إدخال تفاصيل الطلب.');
    }
}

// تحديد الأقسام والمتطلبات النظامية لسحب العينات
function submitSampling() {
    const departments = Array.from(document.getElementById('departments').selectedOptions).map(opt => opt.value);
    const requirements = document.getElementById('legal-requirements').value;

    if (departments.length && requirements) {
        alert(`تم حفظ الأقسام: ${departments.join(', ')} مع المتطلبات النظامية.`);
    } else {
        alert('يرجى اختيار الأقسام وإدخال المتطلبات.');
    }
}
