function loadall() {
  load_data();
  load_files();
  load_storage();
  load_input_tag();
}

function load_data(tag_search) {
  $.ajax({
    method: "POST",
    url: "./data/tampil_tagar_sidebar.php",
    data: {
      tag_search: tag_search
    },
    success: function (hasil) {
      $('#datags').html(hasil);
    }
  });
}

function load_input_tag() {
  $.ajax({
    method: "POST",
    url: "./data/tag.php",
    data: {
      nodata: "datano"
    },
    success: function (hasil) {
      $('#tag').html(hasil);
    }
  });
}

function load_files(search) {
  search = $("#search").val();
  $.ajax({
    method: "POST",
    url: "./data/files.php",
    data: {
      search: search
    },
    success: function (hasil) {
      $('#listFile').html(hasil);
      // table = $('#files').DataTable({
      //   "paging": false,
      //   "lengthChange": false,
      //   "searching": false,
      //   "ordering": true,
      //   "info": false,
      //   "autoWidth": false,
      //   "responsive": false,
      // }).ajax.reload();
    }
  });
}

function load_storage() {
  $.ajax({
    method: "GET",
    url: "./data/storage.php",
    data: {
      minta: "BAGI WOI DATA NYA"
    },
    success: function (hasil) {
      $('#storage').html(hasil);
    }
  });
}

$(document).ready(function () {
  loadall();
});

// CRUD
$('#dataUpload').on('submit', function (e) {
  e.preventDefault();
  var formData = new FormData(this);
  $.ajax({
    url: './aksi.php?act=tambah',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false,
    success: function (h) {
      $('#pesan').html(h);
      loadall();
      $('#dataUpload').get(0).reset();
    }
  });
});

// SEARCH
$('#tag_search').keyup(function () {
  var tag_search = $("#tag_search").val();
  load_data(tag_search);
});

$('#search').keyup(function () {
  var search = $("#search").val();
  load_files(search);
});

//CRUD function
function deleteFile(id) {
  if (confirm('apakah kamu yakin menghapus file ini?') == true) {
    $.ajax({
      url: './aksi.php?act=hapus',
      method: 'GET',
      data: {
        id: id
      },
      success: function (h) {
        $('#pesan').html(h);
        load_files();
      }
    });
  }
}

// toastr
function showSuccess(pesan) {
  toastr.success(pesan, 'Success');
}

function showDanger(pesan) {
  toastr.error(pesan, 'Waring');
}

function showInfo(pesan) {
  toastr.info(pesan, 'Info');
}