package co.prod.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.prod.common.Control;
import co.prod.service.ProductService;
import co.prod.service.ProductServiceImpl;

public class FullAjax implements Control {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		ProductService service = new ProductServiceImpl();
		List<Map<String, Object>> list = service.getSchedules();
		String json = "";
		Gson gson = new GsonBuilder().create();
		json = gson.toJson(list);
		return json + ".ajax";
	}

}
