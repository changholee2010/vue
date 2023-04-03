package co.prod.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MembersVO {
	private String memberId; // 추가되는 항목.
	private String memberName;
	private String memberAddr;
	private String memberTel;
	private String memberPw;
}
