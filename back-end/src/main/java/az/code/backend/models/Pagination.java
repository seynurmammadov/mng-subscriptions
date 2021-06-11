package az.code.backend.models;

import lombok.Getter;
import lombok.Setter;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Getter
@Setter
public class Pagination<T> {
    private Integer pageCount;
    private Integer page;
    private Integer objCount;
    private String nextPage;
    private String prevPage;
    private List<T> list;

    public Pagination(HttpServletRequest request, Integer objCount, Integer page, List<T> list) {
        if (objCount == null && page == null) {
            this.list = list;
        } else {
            this.page = Objects.requireNonNullElse(page, 1);
            this.objCount = Objects.requireNonNullElse(objCount, 5);
            if (this.page > 1) {
                this.prevPage = request.getRequestURL() + "?count=" + objCount + "&page=" + (this.page - 1);
            }
            this.pageCount = (int) Math.ceil(list.size() / this.objCount);
            if (this.pageCount > this.page) {
                this.nextPage = request.getRequestURL() + "?count=" + objCount + "&page=" + (this.page + 1);
            }
            long skip = this.objCount * (this.page - 1);
            if (skip >= list.size() || skip < 0) {
                this.list = new ArrayList<>();
            } else {
                this.list = list.stream().skip(skip)
                        .limit(this.objCount)
                        .collect(Collectors.toList());
            }
        }
    }
}
