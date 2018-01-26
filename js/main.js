'user strict';

const convertMd = () => {
  let text = $('#sourceTA').val();
  let converter = new showdown.Converter();
  converter.setFlavor('github');
  let html = converter.makeHtml(text);
  $('#targetDiv').html(html);
};

$('#sourceTA').keydown(e => e.keyCode === 13 ? convertMd() : null);