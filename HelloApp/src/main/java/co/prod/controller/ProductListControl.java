package co.prod.controller;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.prod.common.Control;
import co.prod.service.ProductService;
import co.prod.service.ProductServiceImpl;

public class ProductListControl implements Control {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		// db 결과 -> attribute("list")

		ProductService service2 = new ProductServiceImpl();
		request.setAttribute("products", service2.products());
		return "product/productList.tiles"; // 실행할 페이지.
	}

}
