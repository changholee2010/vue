package co.prod.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.prod.common.Control;
import co.prod.vo.MembersVO;

public class MemberAddJquery implements Control {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		String id = request.getParameter("id");
		String name = request.getParameter("name");
		String addr = request.getParameter("addr");
		String tel = request.getParameter("tel");
		String pw = request.getParameter("pw");

		MembersVO vo = new MembersVO();
		vo.setMemberId(id);
		vo.setMemberName(name);
		vo.setMemberAddr(addr);
		vo.setMemberTel(tel);
		vo.setMemberPw(pw);
		
		

		return null;
	}

}
