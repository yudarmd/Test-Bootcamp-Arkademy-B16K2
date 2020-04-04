<?php
  include 'koneksi.php';

  $delete_id = $_POST['delete_id'];

  mysqli_query($koneksi, "DELETE FROM `product` WHERE id='$delete_id'");
  header("Location: index.php?status=deleted");
?>