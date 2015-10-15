$(function(){
    var stepNum = 1;
    $('.nextBtn').click(function(){
        if(checkstep()){
            $('#step'+stepNum).addClass('hidden');
            stepNum++;
            $('#step'+stepNum).removeClass('hidden');
        }
    });

    $('.prevBtn').click(function(){
        $('#step'+stepNum).addClass('hidden');
        stepNum--;
        $('#step'+stepNum).removeClass('hidden');
    });

    // $('#submit').click(function(){
    //     if(checkstep()){
    //         alert('提交成功');
    //         location.reload();
    //     }
    // })

    $('#phoneArea').change(function(){
        if($(this).val() != 0 && $(this).val() != -9999){
            $('#phoneAreaCode').val($(this).val());
        }else{
            $('#phoneAreaCode').val('');
        }
    });

    $('#state').change(function(){
        if($(this).val() != 0 && $(this).val() != -9999){
            $('#stateCode').val($(this).val());
            $('#stateCodeU').val($(this).val());
        }else{
            $('#stateCode').val('');
            $('#stateCodeU').val('');
        }
    });

    function checkstep() {
        switch (stepNum) {
            case 1:
                return checkstep1();
                break;
            case 2:
                return checkstep2();
                break;
            case 3:
                return checkstep3();
                break;
            case 4:
                return checkstep4();
                break;
        }
        return true;
    }

    function checkstep1() {
        var valid = true;
        var value1 = $("select#1 option:selected").val();
        var value2 = $("select#2 option:selected").val();
        var value3 = $("select#3 option:selected").val();
        var value4 = $("select#4 option:selected").val();
        
        if (value1 == "") {
            msg = "请选择问题1答案";
            valid = false;
        }else if(value2 == ""){
            msg = "请选择问题2答案";
            valid = false;
        }else if (value3 == "") {
            msg = "请选择问题3答案";
            valid = false;
        }else if (value4 == "") {
            msg = "请选择问题4答案";
            valid = false;
        }

        if (!valid) {
            alert(msg);
        }
        return valid;
    }

    function checkstep2() {
        var valid = true;
        var value1 = $("select#5 option:selected").val();
        var value2 = $("select#6 option:selected").val();
        var value3 = $("select#7 option:selected").val();
        var value4 = $("select#8 option:selected").val();
        
        if (value1 == "") {
            msg = "请选择问题5答案";
            valid = false;
        }else if(value2 == ""){
            msg = "请选择问题6答案";
            valid = false;
        }else if (value3 == "") {
            msg = "请选择问题7答案";
            valid = false;
        }else if (value4 == "") {
            msg = "请选择问题8答案";
            valid = false;
        }

        if (!valid) {
            alert(msg);
        }
        return valid;
    }

    function checkstep3() {
        var valid = true;
        var value1 = $("select#9 option:selected").val();
        var value2 = $("select#10 option:selected").val();
        var value3 = $("select#11 option:selected").val();
        var value4 = $("select#12 option:selected").val();
        
        if (value1 == "") {
            msg = "请选择问题1答案";
            valid = false;
        }else if(value2 == ""){
            msg = "请选择问题2答案";
            valid = false;
        }else if (value3 == "") {
            msg = "请选择问题3答案";
            valid = false;
        }else if (value4 == "") {
            msg = "请选择问题4答案";
            valid = false;
        }

        if (!valid) {
            alert(msg);
        }
        return valid;
    }

    function checkstep4() {
        var valid = true;
        var value1 = $("select#13 option:selected").val();
        var value2 = $("select#14 option:selected").val();
        var value3 = $("select#15 option:selected").val();
        var value4 = $("select#16 option:selected").val();
        
        if (value1 == "") {
            msg = "请选择问题5答案";
            valid = false;
        }else if(value2 == ""){
            msg = "请选择问题6答案";
            valid = false;
        }else if (value3 == "") {
            msg = "请选择问题7答案";
            valid = false;
        }else if (value4 == "") {
            msg = "请选择问题8答案";
            valid = false;
        }

        if (!valid) {
            alert(msg);
        }
        return valid;
    }

    function checkstep5() {
        var valid = true;
        var name = $("#name").val();
        var company = $("#company").val();
        var tel = $("#tel").val();
        
        if (name == "") {
            msg = "请填写姓名";
            valid = false;
        }else if(company == ""){
            msg = "请填写公司";
            valid = false;
        }else if (tel == "") {
            msg = "请填写手机号";
            valid = false;
        }

        if (!valid) {
            alert(msg);
        }
        return valid;
    }

    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    }
})