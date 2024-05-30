import { useEffect, useRef, useState } from 'react';

import { fetchProducts } from '../api/products';
import usePage from './usePage';
import useProducts from './useProducts';

import { Order, Sort } from '../types/product';
import useIntersectionObserver from './useIntersectionObserver';

const useFetchProducts = () => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [isLastPage, setIsLastPage] = useState(false);

  const { products, addProducts, resetProducts } = useProducts();
  const { page, increasePage, decreasePage, resetPage } = usePage();

  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState<Sort>({
    price: 'asc',
  });

  const getProducts = async () => {
    try {
      setLoading(true);
      const data = await fetchProducts(page, category, sort);

      if (data.last) setIsLastPage(true);

      addProducts(data.content);
    } catch (error) {
      decreasePage();
      setError(error);
      setTimeout(() => setError(null), 3000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isLastPage && !error) getProducts();
  }, [page, category, sort]);

  const reset = () => {
    resetPage();
    resetProducts();
    setIsLastPage(false);
  };

  const filterByCategory = (selectedCategory: string) => {
    if (selectedCategory !== category) {
      reset();
      setCategory(selectedCategory);
    }
  };

  const setSorting = (condition: string, order: Order) => {
    if (sort.price !== order) {
      reset();
      setSort((prevSort) => {
        return {
          ...prevSort,
          [condition]: order,
        };
      });
    }
  };

  const fetchNextPage = () => {
    if (!isLastPage) increasePage();
  };

  useIntersectionObserver(loading, observerRef, fetchNextPage, { threshold: 0.8 });

  return {
    products,
    loading,
    error,
    page,
    fetchNextPage,
    category,
    filterByCategory,
    sort,
    setSorting,
    observerRef,
  };
};

export default useFetchProducts;
