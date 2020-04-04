<?php
  include 'koneksi.php';

  $cashier = $_POST['cashier'];
  $category = $_POST['category'];
  $product = $_POST['product'];
  $price = $_POST['price'];

  mysqli_query($koneksi, "INSERT INTO `product`(`id`, `name`, `price`, `id_category`, `id_cashier`) VALUES ('','$product','$price','$category','$cashier')");
  header("Location: index.php?status=added");
?>