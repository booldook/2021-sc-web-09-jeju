function validForm(f) {

	console.log(f.writer.value);
	console.log(f.email.value);

	if (f.writer.value.trim() == '') {
		alert('작성자를 입력하세요.');
		f.writer.focus();
		return false;
	}
	if (f.email.value.trim() == '') {
		alert('이메일을 입력하세요.');
		f.email.focus();
		return false;
	}
	if (!validEmail(f.email.value.trim())) {
		alert('이메일 형식이 올바르지 않습니다.');
		f.email.focus();
		return false;
	}
	return true;
}