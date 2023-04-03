package co.prod.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import co.prod.common.DataSource;
import co.prod.mapper.ProductMapper;
import co.prod.vo.MembersVO;
import co.prod.vo.ProductVO;
import co.prod.vo.ReplyVO;

public class ProductServiceImpl implements ProductService {
	SqlSession sqlSession = DataSource.getInstance().openSession(true);
	ProductMapper mapper = sqlSession.getMapper(ProductMapper.class);

	@Override
	public List<ProductVO> products() {
		return mapper.productList();
	}

	@Override
	public ProductVO getProduct(String code) {
		return mapper.selectProduct(code);
	}

	@Override
	public List<ReplyVO> replyList(String code) {
		return mapper.replyList(code);
	}

	@Override
	public boolean removeReply(int replyId) {
		return mapper.deleteReply(replyId) == 1;
	}

	@Override
	public boolean addReply(ReplyVO vo) {
		return mapper.insertReply(vo) == 1;
	}

	@Override
	public ReplyVO getReply(int replyId) {
		return mapper.selectReply(replyId);
	}

	@Override
	public List<Map<String, Object>> chartInfo() {
		return mapper.chartInfo();
	}

	@Override
	public List<Map<String, Object>> getSchedules() {
		List<Map<String, Object>> list = mapper.schedules();
		List<Map<String, Object>> result = new ArrayList<Map<String, Object>>();

		for (Map<String, Object> map : list) {
//			System.out.println(map);
			Map<String, Object> rmap = new HashMap<String, Object>();
			rmap.put("title", map.get("TITLE"));
			rmap.put("start", map.get("START_DATE"));
			rmap.put("end", map.get("END_DATE"));
			result.add(rmap);
		}
		return result;
	}

}
