package co.prod.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.prod.common.Control;
import co.prod.service.ProductService;
import co.prod.service.ProductServiceImpl;

public class FullAjax implements Control {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		ProductService service = new ProductServiceImpl();
		List<Map<String, Object>> list = service.getSchedules();
		for (Map<String, Object> map : list) {
			System.out.println(map.get("TITLE"));
		}
		return ".ajax";
	}

}
