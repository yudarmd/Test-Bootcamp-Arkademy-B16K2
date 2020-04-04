<?php
  include 'koneksi.php';

  $edit_id = $_POST['edit_id'];
  $edit_cashier = $_POST['edit_cashier'];
  $edit_category = $_POST['edit_category'];
  $edit_product = $_POST['edit_product'];
  $edit_price = $_POST['edit_price'];

  mysqli_query($koneksi, "UPDATE `product` SET `id`='$edit_id',`name`='$edit_product',`price`='$edit_price',`id_category`='$edit_category',`id_cashier`='$edit_cashier' WHERE id = '$edit_id'");
  header("Location: index.php?status=edited");
?>