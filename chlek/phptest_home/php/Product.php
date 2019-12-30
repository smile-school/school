<?php

class Product
{
    public function getData()
    {
        $json = file_get_contents('php/products.json');
        $data = json_decode($json, true);

        return $data;
    }

    public function getCountProduct()
    {
        return count($this->getData());
    }

    public function getImage($id)
    {
        $data = $this->getData();
        return $data[$id]['img'];
    }

    public function getTitle($id)
    {
        $data = $this->getData();
        return $data[$id]['title'];
    }

    public function getRating($id)
    {
        $data = $this->getData();
        return $data[$id]['rating'];
    }

    public function getPrice($id)
    {
        $data = $this->getData();
        return $data[$id]['price'];
    }

    public function getActions($id)
    {
        $data = $this->getData();
        return $data[$id]['actions'];
    }

    public function getUrl($id)
    {
        $data = $this->getData();
        return $data[$id]['url'];
    }

    public function getDiscount($id)
    {
        $data = $this->getData();
        return $data[$id]['price']['oldPrice'] - $data[$id]['price']['finalPrice'];
    }

    public function getShowRating($id)
    {
        $rating = '';
        $data = $this->getRating($id);
        for ($i = 0; $i < $data / 10; $i++) {
            $rating .= '<i class="icon-star-empty"></i>';
        }
        return $rating;
    }
}
