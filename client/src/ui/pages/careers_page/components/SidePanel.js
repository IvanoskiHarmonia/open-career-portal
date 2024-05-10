// Create side panel for careers page that will display the list of available jobs.

import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

import { getJobs } from "../../../../common/api/Jobs";
import { JobCard } from "../../../components/job_card";
