<template>
  <div class="card h-100 mb-4">
    <div class="card-header pb-0 px-3">
      <div class="row">
        <div class="col-md-6">
          <h6 class="mb-0">Your Transaction's</h6>
        </div>
        <div class="col-md-6 d-flex justify-content-end align-items-center">
          <i class="far fa-calendar-alt me-2" aria-hidden="true"></i>
          <small>23 - 30 March 2020</small>
        </div>
      </div>
    </div>
    <div class="card-body pt-4 p-3">
      <h6 class="text-uppercase text-body text-xs font-weight-bolder mb-3">
        Newest
      </h6>
      <ul class="list-group">
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <!-- button 컴포넌트, prop로 조작되고 있음
            이 역시 data() 혹은 props로 가능한지 테스트 -->
            <vsud-button
              color="danger"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-down" aria-hidden="true"></i>
            </vsud-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Netflix</h6>
              <span class="text-xs">27 March 2020, at 12:30 PM</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold"
          >
            - $ 2,500
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <vsud-button
              :color="testingColor"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-up" aria-hidden="true"></i>
            </vsud-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Apple</h6>
              <span class="text-xs">27 March 2020, at 04:30 AM</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold"
          >
            + $ 2,000
          </div>
        </li>
      </ul>
      <h6 class="text-uppercase text-body text-xs font-weight-bolder my-3">
        Yesterday
      </h6>
      <ul class="list-group">
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <vsud-button
              color="success"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-up" aria-hidden="true"></i>
            </vsud-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Stripe</h6>
              <span class="text-xs">26 March 2020, at 13:45 PM</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold"
          >
            + $ 750
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <vsud-button
              color="success"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-up" aria-hidden="true"></i>
            </vsud-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">HubSpot</h6>
              <span class="text-xs">26 March 2020, at 12:30 PM</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold"
          >
            + $ 1,000
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <vsud-button
              color="success"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-up" aria-hidden="true"></i>
            </vsud-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Creative Tim</h6>
              <span class="text-xs">26 March 2020, at 08:30 AM</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold"
          >
            + $ 2,500
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <vsud-button
              color="dark"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-exclamation" aria-hidden="true"></i>
            </vsud-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Webflow</h6>
              <span class="text-xs">26 March 2020, at 05:00 AM</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-dark text-sm font-weight-bold"
          >
            Pending
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<!-- 컴포넌트 호출 및 선언하는 스크립트 단 -->
<script>
import { defineComponent } from "vue";

/* 컴포넌트 호출 */
import VsudButton from "@/components/VsudButton.vue";

/* 상위 컴포넌트 선언 */
export default defineComponent({
  /* 고유 name */
  name: "TransactionCard",
  /* 호출 컴포넌트 */
  components: {
    VsudButton,
  },
  data() {
    return {
      testingColor: "info",
    };
  },
});
</script>
